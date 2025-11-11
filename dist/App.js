import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { toast } from "sonner";
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { CatalogPage } from "./components/CatalogPage";
import { Footer } from "./components/Footer";
import { CartDialog } from "./components/CartDialog";
import { ProductDetailDialog } from "./components/ProductDetailDialog";
import { NotifyDialog } from "./components/NotifyDialog";
import { LookbookDialog } from "./components/LookbookDialog";
import { GiftCertificateDialog } from "./components/GiftCertificateDialog";
import { InfoDialog } from "./components/InfoDialog";
import { SearchDialog } from "./components/SearchDialog";
import { AccountDialog } from "./components/AccountDialog";
import { CollabDialog } from "./components/CollabDialog";
import { FavoritesDialog } from "./components/FavoritesDialog";
import { PolicyDialog } from "./components/PolicyDialog";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner";
export default function App() {
    const [currentPage, setCurrentPage] = useState("home");
    const [isLoading, setIsLoading] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [detailProduct, setDetailProduct] = useState(null);
    const [notifyCollection, setNotifyCollection] = useState(null);
    const [isLookbookOpen, setIsLookbookOpen] = useState(false);
    const [isGiftCertificateOpen, setIsGiftCertificateOpen] = useState(false);
    const [infoDialogType, setInfoDialogType] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const [selectedCollab, setSelectedCollab] = useState(null);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
    const [policyType, setPolicyType] = useState(null);
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem("theme");
        const initialTheme = savedTheme || "dark";
        // Set theme immediately
        document.documentElement.setAttribute("data-theme", initialTheme);
        return initialTheme;
    });
    useEffect(() => {
        // Simulate loading time for the creative loader
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    useEffect(() => {
        // Apply theme to document
        console.log("Applying theme to DOM:", theme);
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
        console.log("DOM data-theme attribute:", document.documentElement.getAttribute("data-theme"));
    }, [theme]);
    const toggleTheme = () => {
        console.log("Toggle theme clicked, current theme:", theme);
        setTheme((prev) => {
            const newTheme = prev === "light" ? "dark" : "light";
            console.log("New theme will be:", newTheme);
            return newTheme;
        });
    };
    const handleAddToCart = (productId, size, quantity) => {
        const product = products.find((p) => p.id === productId);
        if (!product)
            return;
        const existingItemIndex = cartItems.findIndex((item) => item.id === productId && item.size === size);
        if (existingItemIndex >= 0) {
            const newCartItems = [...cartItems];
            newCartItems[existingItemIndex].quantity += quantity;
            setCartItems(newCartItems);
        }
        else {
            setCartItems([
                ...cartItems,
                {
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    imageUrl: product.imageUrl,
                    size,
                    quantity,
                },
            ]);
        }
        toast.success("Товар добавлен в корзину", {
            description: `${product.name} (размер ${size})`,
        });
    };
    const handleUpdateQuantity = (id, size, quantity) => {
        if (quantity < 1)
            return;
        setCartItems(cartItems.map((item) => item.id === id && item.size === size
            ? { ...item, quantity }
            : item));
    };
    const handleRemoveItem = (id, size) => {
        setCartItems(cartItems.filter((item) => !(item.id === id && item.size === size)));
        toast.success("Товар удален из корзины");
    };
    const handleOpenProductDetail = (product) => {
        setDetailProduct(product);
    };
    const handleOpenNotify = (collectionName) => {
        setNotifyCollection(collectionName);
    };
    const handleToggleFavorite = (product) => {
        const isFavorite = favoriteItems.some((item) => item.id === product.id);
        if (isFavorite) {
            setFavoriteItems(favoriteItems.filter((item) => item.id !== product.id));
            toast.success("Удалено из избранного");
        }
        else {
            setFavoriteItems([...favoriteItems, product]);
            toast.success("Добавлено в избранное");
        }
    };
    const handleRemoveFromFavorites = (productId) => {
        setFavoriteItems(favoriteItems.filter((item) => item.id !== productId));
        toast.success("Товар удален из избранного");
    };
    const handleAddToCartFromFavorites = (product) => {
        setIsFavoritesOpen(false);
        setDetailProduct(product);
    };
    // Mock data for limited collections
    const limitedCollections = [
        {
            name: "Москва 2025",
            description: "Коллекция, вдохновленная архитектурой конструктивизма и энергией московских улиц. Геометрические принты и минималистичные силуэты.",
            imageUrl: "https://images.unsplash.com/photo-1614788404413-ca65466f81f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwbW9kZWwlMjBtYWxlfGVufDF8fHx8MTc2Mjc0ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            releaseDate: new Date("2025-11-20"),
            city: "Москва",
        },
        {
            name: "Питерский авангард",
            description: "Экспериментальная линия с отсылками к русскому авангарду. Яркие цветовые блоки, супрематические формы и нестандартные фасоны.",
            imageUrl: "https://images.unsplash.com/photo-1660983414551-b3758336be15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBmZW1hbGV8ZW58MXx8fHwxNzYyNzQ4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            releaseDate: new Date("2025-11-25"),
            city: "Санкт-Петербург",
        },
        {
            name: "Екатеринбург метал",
            description: "Брутальная коллекция с элементами индустриального дизайна. Акцент на фактурные материалы, металлические детали и темную палитру урбанистических пейзажей.",
            imageUrl: "https://images.unsplash.com/photo-1576790807856-b9205fb5703f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldHdlYXIlMjBmYXNoaW9uJTIwbW9kZWx8ZW58MXx8fHwxNzYyNzgxNTI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            releaseDate: new Date("2025-12-01"),
            city: "Екатеринбург",
        },
        {
            name: "Новосибирск техно",
            description: "Футуристичная линия на стыке моды и технологий. Светоотражающие материалы, модульные элементы и смелые решения для урбан-культуры нового поколения.",
            imageUrl: "https://images.unsplash.com/photo-1762343287340-8aa94082e98b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHJlZXQlMjBzdHlsZSUyMG91dGZpdHxlbnwxfHx8fDE3NjI3ODE1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            releaseDate: new Date("2025-12-05"),
            city: "Новосибирск",
        },
    ];
    // Mock data for products
    const products = [
        // Уличный минимализм
        {
            id: "1",
            name: "Худи Геометрия",
            price: 6990,
            imageUrl: "https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwYmxhY2t8ZW58MXx8fHwxNzYyNzgyMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Уличный минимализм",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "2",
            name: "Футболка Авангард",
            price: 3490,
            imageUrl: "https://images.unsplash.com/photo-1618677603544-51162346e165?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwdHNoaXJ0JTIwd2hpdGV8ZW58MXx8fHwxNzYyNzgyMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Уличный минимализм",
            category: "tshirt",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "3",
            name: "Карго простота",
            price: 7990,
            imageUrl: "https://images.unsplash.com/photo-1758267928031-a87e5a5c6c5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwcGFudHMlMjBjYXJnb3xlbnwxfHx8fDE3NjI3ODIwNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Уличный минимализм",
            category: "pants",
            gender: "unisex",
            subcategory: "низ",
        },
        {
            id: "4",
            name: "Кепка Urban",
            price: 2490,
            imageUrl: "https://images.unsplash.com/photo-1550314124-301ca0b773ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2FwJTIwaGF0fGVufDF8fHx8MTc2Mjc1NDQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Уличный минимализм",
            category: "accessories",
            gender: "unisex",
            subcategory: "аксессуары",
        },
        // Технологичный комфорт
        {
            id: "5",
            name: "Свитшот Tech",
            price: 5990,
            imageUrl: "https://images.unsplash.com/photo-1577991712260-4ee45603dab8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VhdHNoaXJ0JTIwc3RyZWV0d2VhcnxlbnwxfHx8fDE3NjI3ODIwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Технологичный комфорт",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "6",
            name: "Ветровка Performance",
            price: 11990,
            imageUrl: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kYnJlYWtlciUyMGphY2tldCUyMHVyYmFufGVufDF8fHx8MTc2Mjc4MjA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Технологичный комфорт",
            category: "jacket",
            gender: "men",
            subcategory: "верх",
        },
        {
            id: "7",
            name: "Джоггеры Tech",
            price: 6990,
            imageUrl: "https://images.unsplash.com/photo-1762435891928-91cf7fcb051c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGpvZ2dlcnMlMjBzdHlsZXxlbnwxfHx8fDE3NjI3NDgwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Технологичный комфорт",
            category: "pants",
            gender: "unisex",
            subcategory: "низ",
        },
        {
            id: "8",
            name: "Рюкзак Urban Tech",
            price: 8990,
            imageUrl: "https://images.unsplash.com/photo-1610659592009-088d5c2c4776?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrcGFjayUyMHVyYmFuJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzgyMDY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Технологичный комфорт",
            category: "accessories",
            gender: "unisex",
            subcategory: "аксессуары",
        },
        // Урбан классика
        {
            id: "9",
            name: "Куртка Classic",
            price: 13990,
            imageUrl: "https://images.unsplash.com/photo-1550948506-9a85c307d4a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGphY2tldCUyMGZhc2hpb258ZW58MXx8fHwxNzYyNzgyMDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Урбан классика",
            category: "jacket",
            gender: "men",
            subcategory: "верх",
        },
        {
            id: "10",
            name: "Деним классический",
            price: 9990,
            imageUrl: "https://images.unsplash.com/photo-1578693082747-50c396cacd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI2NzU5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Урбан классика",
            category: "pants",
            gender: "unisex",
            subcategory: "низ",
        },
        {
            id: "11",
            name: "Футболка Essential",
            price: 2990,
            imageUrl: "https://images.unsplash.com/photo-1655141559812-42f8c1e8942d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdHNoaXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2Mjc4MDMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Урбан классика",
            category: "tshirt",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "12",
            name: "Сумка Leather",
            price: 5990,
            imageUrl: "https://images.unsplash.com/photo-1748969721836-14222470e0a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFjY2Vzc29yaWVzJTIwYmFnfGVufDF8fHx8MTc2Mjc4MjA2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Урбан классика",
            category: "accessories",
            gender: "unisex",
            subcategory: "аксессуары",
        },
        // Москва 2025
        {
            id: "13",
            name: "Худи Конструктивизм",
            price: 6990,
            imageUrl: "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwYmxhY2t8ZW58MXx8fHwxNzYyNjg0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            isNew: true,
            collection: "Москва 2025",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "14",
            name: "Карго брюки Urban",
            price: 8990,
            imageUrl: "https://images.unsplash.com/photo-1600803177171-b9fbcc3018f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBhbnRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI2ODQzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Москва 2025",
            category: "pants",
            gender: "unisex",
            subcategory: "низ",
        },
        {
            id: "15",
            name: "Анорак ветрозащитный",
            price: 9990,
            imageUrl: "https://images.unsplash.com/photo-1598087216773-d02ad98034f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBzdHlsZSUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2Mjc0NjE2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Москва 2025",
            category: "jacket",
            gender: "men",
            subcategory: "верх",
        },
        // Питерский авангард
        {
            id: "16",
            name: "Бомбер авангард",
            price: 12990,
            imageUrl: "https://images.unsplash.com/photo-1629353689974-af4d5c70440f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjBzdHlsZXxlbnwxfHx8fDE3NjI3ODIwNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Питерский авангард",
            category: "jacket",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "17",
            name: "Джоггеры премиум",
            price: 7490,
            imageUrl: "https://images.unsplash.com/photo-1762435891928-91cf7fcb051c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGpvZ2dlcnMlMjBzdHlsZXxlbnwxfHx8fDE3NjI3NDgwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Питерский авангард",
            category: "pants",
            gender: "women",
            subcategory: "низ",
        },
        {
            id: "18",
            name: "Худи Петербург",
            price: 7990,
            imageUrl: "https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwYmxhY2t8ZW58MXx8fHwxNzYyNzgyMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Питерский авангард",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        // Екатеринбург метал
        {
            id: "19",
            name: "Куртка Metal",
            price: 14990,
            imageUrl: "https://images.unsplash.com/photo-1762343290221-d2374e1e2e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib21iZXIlMjBqYWNrZXQlMjB1cmJhbnxlbnwxfHx8fDE3NjI2ODQzOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Екатеринбург метал",
            category: "jacket",
            gender: "men",
            subcategory: "верх",
        },
        {
            id: "20",
            name: "Карго industrial",
            price: 9990,
            imageUrl: "https://images.unsplash.com/photo-1600803177171-b9fbcc3018f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHBhbnRzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI2ODQzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Екатеринбург метал",
            category: "pants",
            gender: "unisex",
            subcategory: "низ",
        },
        {
            id: "21",
            name: "Футболка Ural",
            price: 3990,
            imageUrl: "https://images.unsplash.com/photo-1655141559812-42f8c1e8942d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwdHNoaXJ0JTIwZGVzaWdufGVufDF8fHx8MTc2Mjc4MDMwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Екатеринбург метал",
            category: "tshirt",
            gender: "unisex",
            subcategory: "верх",
        },
        // Новосибирск техно
        {
            id: "22",
            name: "Анорак Tech",
            price: 11990,
            imageUrl: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aW5kYnJlYWtlciUyMGphY2tldCUyMHVyYmFufGVufDF8fHx8MTc2Mjc4MjA2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Новосибирск техно",
            category: "jacket",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "23",
            name: "Худи Cyber",
            price: 8990,
            imageUrl: "https://images.unsplash.com/photo-1588011025378-15f4778d2558?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwYmxhY2t8ZW58MXx8fHwxNzYyNjg0Mzg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Новосибирск техно",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "24",
            name: "Джоггеры Techno",
            price: 7990,
            imageUrl: "https://images.unsplash.com/photo-1762435891928-91cf7fcb051c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRpYyUyMGpvZ2dlcnMlMjBzdHlsZXxlbnwxfHx8fDE3NjI3NDgwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isLimited: true,
            collection: "Новосибирск техно",
            category: "pants",
            gender: "men",
            subcategory: "низ",
        },
        // Basics
        {
            id: "25",
            name: "Оверсайз футболка",
            price: 3490,
            imageUrl: "https://images.unsplash.com/photo-1731267776886-90f90af75eb1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdmVyc2l6ZWQlMjB3aGl0ZSUyMHRzaGlydHxlbnwxfHx8fDE3NjI3NDgwMTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Basics",
            category: "tshirt",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "26",
            name: "Лонгслив графика",
            price: 4490,
            imageUrl: "https://images.unsplash.com/photo-1632761486768-5a50cf7329cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjI2NzY5NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Basics",
            category: "tshirt",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "27",
            name: "Свитшот минимал",
            price: 5490,
            imageUrl: "https://images.unsplash.com/photo-1614788404413-ca65466f81f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwbW9kZWwlMjBtYWxlfGVufDF8fHx8MTc2Mjc0ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            isNew: true,
            collection: "Basics",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "28",
            name: "Джинсы прямые",
            price: 6990,
            imageUrl: "https://images.unsplash.com/photo-1578693082747-50c396cacd81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW5pbSUyMGplYW5zJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjI2NzU5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            collection: "Basics",
            category: "pants",
            gender: "unisex",
            subcategory: "низ",
        },
        {
            id: "29",
            name: "Худи базовое",
            price: 5990,
            imageUrl: "https://images.unsplash.com/photo-1711387718409-a05f62a3dc39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwaG9vZGllJTIwYmxhY2t8ZW58MXx8fHwxNzYyNzgyMDYzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            collection: "Basics",
            category: "hoodie",
            gender: "unisex",
            subcategory: "верх",
        },
        {
            id: "30",
            name: "Шапка вязаная",
            price: 1990,
            imageUrl: "https://images.unsplash.com/photo-1550314124-301ca0b773ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwY2FwJTIwaGF0fGVufDF8fHx8MTc2Mjc1NDQyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            collection: "Basics",
            category: "accessories",
            gender: "unisex",
            subcategory: "аксессуары",
        },
    ];
    // Mock data for hero collections
    const heroCollections = [
        {
            title: "Уличный минимализм",
            subtitle: "Новая коллекция вдохновлена геометрией русского авангарда и энергией современных мегаполисов",
            imageUrl: "https://images.unsplash.com/photo-1598087216773-d02ad98034f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmYXNoaW9uJTIwcGhvdG9ncmFwaHklMjB1cmJhbnxlbnwxfHx8fDE3NjI3ODE3OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            ctaText: "Купить коллекцию",
            badge: "New Drop",
        },
        {
            title: "Технологичный комфорт",
            subtitle: "Инновационные материалы встречаются с классическими силуэтами. Одежда для динамичной городской жизни",
            imageUrl: "https://images.unsplash.com/photo-1736555142217-916540c7f1b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzdHJlZXR3ZWFyJTIwc3R5bGV8ZW58MXx8fHwxNzYyNzAwMDkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            ctaText: "Смотреть новинки",
            badge: "Tech Series",
        },
        {
            title: "Урбан классика",
            subtitle: "Переосмысление вечных силуэтов через призму уличной культуры. Базовые вещи с характером",
            imageUrl: "https://images.unsplash.com/photo-1614788404413-ca65466f81f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXR3ZWFyJTIwbW9kZWwlMjBtYWxlfGVufDF8fHx8MTc2Mjc0ODAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            ctaText: "Открыть каталог",
            badge: "Essential",
        },
    ];
    // Mock data for collaborations
    const collaborations = [
        {
            artist: "Саша Новиков",
            title: "Граффити серия",
            description: "Коллаборация с московским граффити-художником. Авторские принты на базовых силуэтах.",
            imageUrl: "https://images.unsplash.com/photo-1730054159372-7d55931ab435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMHdhbGwlMjBhcnR8ZW58MXx8fHwxNzYyNzQ4MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Художник",
        },
        {
            artist: "ELECTRO BAND",
            title: "Tour collection",
            description: "Совместная линия с электронной группой. Лимитированный мерч для тура по России.",
            imageUrl: "https://images.unsplash.com/photo-1727874779931-e180ce4ae78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjI3NDgwMTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Музыканты",
        },
        {
            artist: "Лена Волкова",
            title: "Digital art print",
            description: "Цифровые артворки на одежде от известного диджитал-художника.",
            imageUrl: "https://images.unsplash.com/photo-1660983414551-b3758336be15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGZhc2hpb24lMjBmZW1hbGV8ZW58MXx8fHwxNzYyNzQ4MDE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            type: "Диджитал-арт",
        },
    ];
    return (_jsxs("div", { className: "min-h-screen overflow-x-hidden bg-background text-foreground", children: [isLoading && _jsx(Loader, {}), !isLoading && (_jsxs(_Fragment, { children: [_jsx(Header, { onCartClick: () => setIsCartOpen(true), cartItemCount: cartItems.reduce((sum, item) => sum + item.quantity, 0), onLookbookClick: () => setIsLookbookOpen(true), onSearchClick: () => setIsSearchOpen(true), onAccountClick: () => setIsAccountOpen(true), onFavoritesClick: () => setIsFavoritesOpen(true), theme: theme, onToggleTheme: toggleTheme, currentPage: currentPage, onNavigate: (page) => {
                            setCurrentPage(page);
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        } }), currentPage === "home" ? (_jsx(HomePage, { heroCollections: heroCollections, limitedCollections: limitedCollections, collaborations: collaborations, onNotify: handleOpenNotify, onViewCatalog: () => {
                            setCurrentPage("catalog");
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }, onCollabClick: (collab) => setSelectedCollab(collab), onGiftCertificateClick: () => setIsGiftCertificateOpen(true) })) : (_jsx(CatalogPage, { products: products, onAddToCart: handleOpenProductDetail, onProductClick: handleOpenProductDetail, favoriteIds: favoriteItems.map((item) => item.id), onToggleFavorite: handleToggleFavorite })), _jsx(Footer, { onDeliveryClick: () => setInfoDialogType("delivery"), onReturnsClick: () => setInfoDialogType("returns"), onContactsClick: () => setInfoDialogType("contacts"), onPrivacyClick: () => setPolicyType("privacy"), onTermsClick: () => setPolicyType("terms"), onGiftCertificateClick: () => setIsGiftCertificateOpen(true) }), _jsx(CartDialog, { open: isCartOpen, onOpenChange: setIsCartOpen, items: cartItems, onUpdateQuantity: handleUpdateQuantity, onRemoveItem: handleRemoveItem }), _jsx(ProductDetailDialog, { open: !!detailProduct, onOpenChange: (open) => !open && setDetailProduct(null), product: detailProduct, onAddToCart: (size, quantity) => {
                            if (detailProduct) {
                                handleAddToCart(detailProduct.id, size, quantity);
                                setDetailProduct(null);
                            }
                        } }), _jsx(NotifyDialog, { open: !!notifyCollection, onOpenChange: (open) => !open && setNotifyCollection(null), collectionName: notifyCollection || "" }), _jsx(LookbookDialog, { open: isLookbookOpen, onOpenChange: setIsLookbookOpen }), _jsx(GiftCertificateDialog, { open: isGiftCertificateOpen, onOpenChange: setIsGiftCertificateOpen }), _jsx(InfoDialog, { open: !!infoDialogType, onOpenChange: (open) => !open && setInfoDialogType(null), type: infoDialogType }), _jsx(SearchDialog, { open: isSearchOpen, onOpenChange: setIsSearchOpen }), _jsx(AccountDialog, { open: isAccountOpen, onOpenChange: setIsAccountOpen, onOpenPrivacy: () => {
                            setIsAccountOpen(false);
                            setPolicyType("privacy");
                        }, onOpenTerms: () => {
                            setIsAccountOpen(false);
                            setPolicyType("terms");
                        } }), _jsx(CollabDialog, { open: !!selectedCollab, onOpenChange: (open) => !open && setSelectedCollab(null), collab: selectedCollab }), _jsx(FavoritesDialog, { open: isFavoritesOpen, onOpenChange: setIsFavoritesOpen, items: favoriteItems, onRemove: handleRemoveFromFavorites, onAddToCart: handleAddToCartFromFavorites }), _jsx(PolicyDialog, { open: !!policyType, onOpenChange: (open) => !open && setPolicyType(null), type: policyType }), _jsx(Toaster, {})] }))] }));
}
//# sourceMappingURL=App.js.map