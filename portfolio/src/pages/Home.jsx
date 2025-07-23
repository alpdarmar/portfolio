import { ThemeToggle } from "../components/ThemeToggle";
import {Backgrounding} from "@/components/Backgrounding";

export const Home = () => {
    return(
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <Backgrounding />
        {/* Navbar */}

        {/* Main Content */}

        {/* Footer */}
    </div>
    );
};