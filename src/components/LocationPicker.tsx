'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Search, MapPin, Loader2 } from 'lucide-react';

// Fix for default Leaflet markers in Next.js
const iconUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
const iconRetinaUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
const shadowUrl = 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl,
    iconRetinaUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

interface Location {
    address: string;
    lat: number;
    lng: number;
}

interface LocationPickerProps {
    label: string;
    onLocationSelect: (location: Location) => void;
    defaultPosition?: [number, number]; // [lat, lng]
}

// Component to handle map updates when position changes
function MapUpdater({ position }: { position: [number, number] }) {
    const map = useMap();
    useEffect(() => {
        map.flyTo(position, map.getZoom());
    }, [position, map]);
    return null;
}

// Component to handle map clicks
function MapClickHandler({ onLocationSelect }: { onLocationSelect: (lat: number, lng: number) => void }) {
    useMapEvents({
        click(e) {
            onLocationSelect(e.latlng.lat, e.latlng.lng);
        },
    });
    return null;
}

export default function LocationPicker({ label, onLocationSelect, defaultPosition = [-25.7479, 28.2293] }: LocationPickerProps) {
    const [position, setPosition] = useState<[number, number]>(defaultPosition);
    const [address, setAddress] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const [showResults, setShowResults] = useState(false);
    const [isLoadingAddress, setIsLoadingAddress] = useState(false);

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

    const reverseGeocode = async (lat: number, lng: number) => {
        setIsLoadingAddress(true);
        try {
            const response = await fetch(
                `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
            );
            const data = await response.json();
            if (data.display_name) {
                setAddress(data.display_name);
                onLocationSelect({
                    address: data.display_name,
                    lat,
                    lng
                });
            }
        } catch (error) {
            console.error('Error reverse geocoding:', error);
        } finally {
            setIsLoadingAddress(false);
        }
    };

    const handleResultSelect = (result: any) => {
        const lat = parseFloat(result.lat);
        const lng = parseFloat(result.lon);
        const newPosition: [number, number] = [lat, lng];
        
        setPosition(newPosition);
        setAddress(result.display_name);
        setSearchQuery(result.display_name); // Update search bar too
        setShowResults(false);
        
        onLocationSelect({
            address: result.display_name,
            lat,
            lng
        });
    };

    const handleMapClick = (lat: number, lng: number) => {
        setPosition([lat, lng]);
        reverseGeocode(lat, lng);
    };

    const handleMarkerDragEnd = (event: any) => {
        const marker = event.target;
        const newPosition = marker.getLatLng();
        setPosition([newPosition.lat, newPosition.lng]);
        reverseGeocode(newPosition.lat, newPosition.lng);
    };

    const markerRef = useRef(null);

    const eventHandlers = useMemo(
        () => ({
            dragend(e: any) {
                handleMarkerDragEnd(e);
            },
        }),
        []
    );

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
                        }}
                        onFocus={() => setShowResults(true)}
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

            {/* Selected Address Display */}
            {address && (
                <div className="bg-amber-50 border border-amber-200 rounded-md p-3 text-sm text-amber-900 flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                        <span className="font-semibold">Selected Location:</span>
                        <p>{isLoadingAddress ? 'Loading address...' : address}</p>
                        <p className="text-xs text-amber-700/70 mt-1">Lat: {position[0].toFixed(5)}, Lng: {position[1].toFixed(5)}</p>
                    </div>
                </div>
            )}

            {/* Map */}
            <div className="h-[300px] w-full rounded-lg overflow-hidden border border-gray-300 shadow-inner relative z-0">
                <MapContainer
                    center={position}
                    zoom={13}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker
                        position={position}
                        icon={customIcon}
                        draggable={true}
                        eventHandlers={eventHandlers}
                        ref={markerRef}
                    >
                        <Popup>
                            {label} Location <br /> Drag to adjust.
                        </Popup>
                    </Marker>
                    <MapUpdater position={position} />
                    <MapClickHandler onLocationSelect={handleMapClick} />
                </MapContainer>
            </div>
            <p className="text-xs text-gray-500">
                * Drag the marker or click on the map to pinpoint the exact location.
            </p>
        </div>
    );
}
