export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black/20 py-8 mt-auto">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-muted-foreground">
                    &copy; {new Date().getFullYear()} Modern Motorsport Team. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
