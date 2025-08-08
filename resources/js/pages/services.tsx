import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Api, ChartBar, Shield } from 'lucide-react';

interface Service {
    id: number;
    title: string;
    description: string;
    icon: string;
}

interface ServicesPageProps extends SharedData {
    title: string;
    services: Service[];
}

/**
 * Services Page Component
 * 
 * Displays the web services homepage with a professional layout
 * showcasing available services and call-to-action elements.
 */
export default function Services() {
    const { title, services } = usePage<ServicesPageProps>().props;

    /**
     * Get the appropriate icon component based on the icon string
     */
    const getServiceIcon = (iconName: string) => {
        const iconMap = {
            api: Api,
            shield: Shield,
            chart: ChartBar,
        };
        
        const IconComponent = iconMap[iconName as keyof typeof iconMap] || Api;
        return <IconComponent className="h-8 w-8 text-primary" />;
    };

    return (
        <>
            <Head title={title} />
            
            <div className="min-h-screen bg-background">
                {/* Header Navigation */}
                <header className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
                    <div className="container mx-auto px-4 py-4">
                        <nav className="flex items-center justify-between">
                            <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors">
                                Laravel Services
                            </Link>
                            <div className="flex items-center gap-4">
                                <Link 
                                    href="/" 
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Home
                                </Link>
                                <Link 
                                    href="/contact" 
                                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    Contact
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>

                {/* Main Content */}
                <main className="container mx-auto px-4 py-16">
                    {/* Hero Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Our Web Services
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                            We provide cutting-edge web development services designed to help your business 
                            thrive in the digital landscape. Our expert team delivers scalable, secure, 
                            and innovative solutions tailored to your specific needs.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {services.map((service) => (
                            <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                <CardHeader className="text-center">
                                    <div className="flex justify-center mb-4">
                                        {getServiceIcon(service.icon)}
                                    </div>
                                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {service.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-center text-base leading-relaxed">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Call to Action Section */}
                    <div className="text-center bg-card rounded-2xl p-12 border shadow-sm">
                        <h2 className="text-3xl font-bold text-foreground mb-4">
                            Ready to Get Started?
                        </h2>
                        <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                            Let's discuss how our web services can help transform your business. 
                            Our team is ready to bring your vision to life.
                        </p>
                        <Button asChild size="lg" className="px-8 py-3">
                            <Link href="/contact">
                                Contact Us Today
                            </Link>
                        </Button>
                    </div>
                </main>

                {/* Footer */}
                <footer className="border-t bg-card/50 mt-16">
                    <div className="container mx-auto px-4 py-8">
                        <div className="text-center text-sm text-muted-foreground">
                            <p>&copy; {new Date().getFullYear()} Laravel Services. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
