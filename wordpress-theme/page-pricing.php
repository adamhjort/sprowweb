<?php
/*
Template Name: Pricing
*/

get_header(); ?>

<main class="min-h-screen bg-background pt-32">
    <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-center mb-6">Pricing</h1>
        <p class="text-lg text-center max-w-2xl mx-auto mb-12">
            Get started with Sprow's freemium plan and upgrade as your team grows. Access advanced features like AI-powered insights and 1-on-1 tracking when you're ready to take your team's development to the next level.
        </p>

        <!-- Pricing Toggle -->
        <div class="flex justify-center gap-4 mb-12">
            <button class="px-6 py-2 bg-primary text-white rounded-full">Yearly</button>
            <button class="px-6 py-2 bg-white text-gray-600 rounded-full">Monthly</button>
        </div>

        <!-- Pricing Cards -->
        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <!-- Basic Plan -->
            <div class="bg-white rounded-3xl p-8 shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Basic</h2>
                <p class="text-3xl font-bold mb-8">$0<span class="text-lg text-gray-500">/seat</span></p>
                <ul class="space-y-4 mb-8">
                    <li>Note taking</li>
                    <li>Goals</li>
                    <li>Actions</li>
                    <li>Google workspace integration</li>
                    <li>Up to 5 employees</li>
                    <li>Basic surveys</li>
                </ul>
                <button class="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                    Sign up
                </button>
            </div>

            <!-- Pro Plan -->
            <div class="bg-[#FFF8E2] rounded-3xl p-8 shadow-lg transform scale-105">
                <h2 class="text-2xl font-bold mb-4">Pro</h2>
                <p class="text-3xl font-bold mb-8">$5<span class="text-lg text-gray-500">/seat</span></p>
                <ul class="space-y-4 mb-8">
                    <li>Everything in Basic +</li>
                    <li>AI functionality</li>
                    <li>Microsoft outlook integration</li>
                    <li>Custom surveys</li>
                </ul>
                <button class="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                    Sign up
                </button>
            </div>

            <!-- Enterprise Plan -->
            <div class="bg-white rounded-3xl p-8 shadow-lg">
                <h2 class="text-2xl font-bold mb-4">Enterprise</h2>
                <p class="text-3xl font-bold mb-8">$7<span class="text-lg text-gray-500">/seat</span></p>
                <ul class="space-y-4 mb-8">
                    <li>Everything in Pro +</li>
                    <li>SSO</li>
                    <li>Advanced analysis</li>
                    <li>Executive summaries</li>
                    <li>360 review AI support</li>
                    <li>Early warning reports</li>
                </ul>
                <button class="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors">
                    Sign up
                </button>
            </div>
        </div>
    </div>
</main>

<?php get_footer(); ?>