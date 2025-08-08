<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

/**
 * ServicesController handles the web services homepage
 * 
 * This controller manages the display of our web services
 * offerings and provides information about available services.
 */
class ServicesController extends Controller
{
    /**
     * Display the web services homepage.
     * 
     * Shows a professional layout with our available web services,
     * including descriptions and call-to-action elements.
     *
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        return Inertia::render('services', [
            'title' => 'Our Web Services',
            'services' => [
                [
                    'id' => 1,
                    'title' => 'REST API Development',
                    'description' => 'Custom REST API solutions built with Laravel, featuring robust authentication, rate limiting, and comprehensive documentation.',
                    'icon' => 'api'
                ],
                [
                    'id' => 2,
                    'title' => 'Authentication as a Service',
                    'description' => 'Secure, scalable authentication systems with multi-factor authentication, OAuth integration, and user management.',
                    'icon' => 'shield'
                ],
                [
                    'id' => 3,
                    'title' => 'Data Processing & Analytics',
                    'description' => 'Real-time data processing pipelines, analytics dashboards, and business intelligence solutions tailored to your needs.',
                    'icon' => 'chart'
                ]
            ]
        ]);
    }
}
