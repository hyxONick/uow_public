class StorageService {
    // localStorage methods

    // Set an item in localStorage
    public static setLocalStorageItem(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    // Get an item from localStorage
    public static getLocalStorageItem<T>(key: string): T | null {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    // Remove an item from localStorage
    public static removeLocalStorageItem(key: string): void {
        localStorage.removeItem(key);
    }

    // Clear all items from localStorage
    public static clearLocalStorage(): void {
        localStorage.clear();
    }

    // sessionStorage methods

    // Set an item in sessionStorage
    public static setSessionStorageItem(key: string, value: any): void {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    // Get an item from sessionStorage
    public static getSessionStorageItem<T>(key: string): T | null {
        const item = sessionStorage.getItem(key);
        return item ? JSON.parse(item) : null;
    }

    // Remove an item from sessionStorage
    public static removeSessionStorageItem(key: string): void {
        sessionStorage.removeItem(key);
    }

    // Clear all items from sessionStorage
    public static clearSessionStorage(): void {
        sessionStorage.clear();
    }
}

export default StorageService;
