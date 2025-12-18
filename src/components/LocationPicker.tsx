'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Loader2 } from 'lucide-react';

interface Location {
    address: string;
    lat: number;
    lng: number;
}

interface LocationPickerProps {
    label: string;
    onLocationSelect: (location: Location) => void;
    defaultPosition?: [number, number]; // [lat, lng] - Kept for compatibility but not used for map
}

export default function LocationPicker({ label, onLocationSelect }: LocationPickerProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.length > 2) {
                searchLocation(searchQuery);
            } else {
                setSearchResults([]);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const searchLocation = async (query: string) => {
        setIsSearching(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5`
            );
            const data = await response.json();
            setSearchResults(data);
            setShowResults(true);
        } catch (error) {
            console.error('Error searching location:', error);
        } finally {
            setIsSearching(false);
        }
    };

    const handleResultSelect = (result: any) => {
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);

        setSearchQuery(result.display_name); // Update search bar with full address
        setSelectedAddress(result.display_name);
        setShowResults(false);

        onLocationSelect({
            address: result.display_name,
            lat,
            lng
        });
    };

    return (
        <div className="space-y-4">
            <h3 className="font-semibold text-gray-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500" /> {label}
            </h3>

            {/* Search Bar */}
            <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-md bg-white focus-within:ring-2 focus-within:ring-amber-400">
                    <Search className="w-5 h-5 text-gray-400 ml-3" />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setShowResults(true);
                            // Clear selection if user starts typing again? 
                            // Maybe not, just let them edit.
                        }}
                        onFocus={() => {
                            if (searchResults.length > 0) setShowResults(true);
                        }}
                        placeholder="Search for an area, street, or landmark..."
                        className="w-full p-3 focus:outline-none rounded-md"
                    />
                    {isSearching && <Loader2 className="w-5 h-5 text-amber-500 animate-spin mr-3" />}
                </div>

                {/* Search Results Dropdown */}
                {showResults && searchResults.length > 0 && (
                    <ul className="absolute z-50 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-60 overflow-y-auto">
                        {searchResults.map((result, index) => (
                            <li
                                key={index}
                                onClick={() => handleResultSelect(result)}
                                className="p-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0 text-sm text-gray-700"
                            >
                                {result.display_name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Selected Address Display (Optional, since input shows it too, but this confirms selection) */}
            {selectedAddress && selectedAddress !== searchQuery && (
                <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-900 flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold">Confirmed Location:</span>
                        <p>{selectedAddress}</p>
                    </div>
                </div>
            )}
        </div>
    );
}
