export function Footer() {
    return (
        <footer className="bg-background border-t border-border/50">
            <div className="container mx-auto px-4 md:px-6 py-6 text-center text-muted-foreground text-sm">
                <p>&copy; {new Date().getFullYear()} LandingPro Kit. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}
