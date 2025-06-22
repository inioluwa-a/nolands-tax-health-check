
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Shield, FileText, Users, ArrowRight, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import TaxHealthCheckForm from "./TaxHealthCheckForm";
import Navigation from "./Navigation";

const LandingPage = () => {
  const [showForm, setShowForm] = useState(false);

  const scrollToForm = () => {
    setShowForm(true);
    setTimeout(() => {
      const formElement = document.getElementById('tax-health-form');
      if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero" className="relative bg-gradient-to-br from-nolands-primary to-blue-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Unlock Peace of Mind: <span className="text-blue-200">Complimentary Tax Health Check</span> & Tax Risk Insurance
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                Protect your business from unexpected tax liabilities and ensure full compliance with Nigeria's complex tax regulations. Get your free assessment today.
              </p>
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="bg-white text-nolands-primary hover:bg-blue-50 text-lg px-8 py-4 rounded-lg font-semibold"
              >
                Protect My Business <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional business environment" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-nolands-primary p-4 rounded-lg shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="h-8 w-8 text-green-600" />
                  <div>
                    <p className="font-semibold">Protected</p>
                    <p className="text-sm text-gray-600">Tax Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-nolands-primary mb-4">
              Nigerian Tax Compliance Doesn't Have to Be Overwhelming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complex regulations, fear of audits, unexpected penalties – we understand your concerns. 
              That's why we've created comprehensive solutions to protect your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-green-100 p-3 rounded-full">
                    <FileText className="h-8 w-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-nolands-primary">Free Tax Health Check</h3>
                    <p className="text-green-600 font-semibold">Complimentary Assessment</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  Get a comprehensive evaluation of your current tax position. Our experts will identify 
                  potential risks, compliance gaps, and optimization opportunities to keep your business secure.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Personalized risk assessment report</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Expert recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Compliance optimization strategies</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardContent className="p-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Shield className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-nolands-primary">Tax Risk Insurance</h3>
                    <p className="text-blue-600 font-semibold">Ultimate Financial Protection</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  The ultimate safety net for your business. Our comprehensive insurance covers professional 
                  fees during audits, investigations, and potential tax liabilities.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Coverage for audit defense costs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Professional fee protection</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-blue-500" />
                    <span>Peace of mind guarantee</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-nolands-primary mb-12">
            What You'll Gain
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Identify Hidden Tax Risks</h3>
              <p className="text-gray-600">Discover potential compliance issues before they become costly problems.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Ensure Full Compliance</h3>
              <p className="text-gray-600">Stay aligned with Nigeria's evolving tax regulations and requirements.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Uncover Tax Savings</h3>
              <p className="text-gray-600">Find legitimate opportunities to optimize your tax position and save money.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Expert Guidance</h3>
              <p className="text-gray-600">Receive personalized recommendations from Nigeria's leading tax professionals.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Financial Protection</h3>
              <p className="text-gray-600">Safeguard against unexpected costs from tax investigations and disputes.</p>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">Peace of Mind</h3>
              <p className="text-gray-600">Focus on growing your business while we handle your tax compliance needs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-nolands-primary mb-12">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-nolands-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="font-bold text-xl mb-3">Complete the Form</h3>
              <p className="text-gray-600">Fill out our comprehensive Tax Health Check questionnaire to help us understand your current situation.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-nolands-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="font-bold text-xl mb-3">Receive Your Report</h3>
              <p className="text-gray-600">Get your personalized Tax Health Report with expert analysis and actionable recommendations.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-nolands-primary text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="font-bold text-xl mb-3">Explore Protection Options</h3>
              <p className="text-gray-600">Learn about our Tax Risk Insurance solutions for ultimate financial protection and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Nolands */}
      <section id="about" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-nolands-primary mb-12">
            Why Choose Nolands?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nigeria's Trusted Tax Advisory Partner</h3>
              <p className="text-gray-600 mb-6">
                With deep expertise in Nigerian tax law and regulations, Nolands has been the trusted partner 
                for businesses navigating complex compliance requirements. Our team of seasoned professionals, 
                led by renowned experts like Professor Taofeeq Abdulrazaq, brings unparalleled knowledge and experience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Decades of Nigerian tax expertise</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Leading thought leadership in tax advisory</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Proven track record with businesses of all sizes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Comprehensive understanding of local regulations</span>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Professional team consultation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-nolands-primary text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Secure Your Tax Future?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Don't wait for tax issues to surprise you. Take control with our complimentary Tax Health Check today.
          </p>
          <Button 
            onClick={scrollToForm}
            size="lg" 
            className="bg-white text-nolands-primary hover:bg-blue-50 text-lg px-8 py-4 rounded-lg font-semibold"
          >
            Get My Free Tax Health Check <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Form Section */}
      {showForm && (
        <section id="tax-health-form" className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-nolands-primary mb-4">
                Start Your Free Tax Health Check
              </h2>
              <p className="text-gray-600">
                Complete the form below to receive your personalized tax assessment and recommendations.
              </p>
            </div>
            <TaxHealthCheckForm />
          </div>
        </section>
      )}

      {/* Footer */}
      <footer id="contact" className="bg-nolands-primary text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                {/* Nigerian Flag */}
                <div className="h-8 w-8 border border-blue-300 rounded-sm overflow-hidden flex">
                  <div className="w-1/3 bg-green-600"></div>
                  <div className="w-1/3 bg-white"></div>
                  <div className="w-1/3 bg-green-600"></div>
                </div>
                <div>
                  <span className="text-xl font-bold">NG.</span>
                  <div className="text-xs text-blue-200">Tax. Advisory. Audit.</div>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                Nigeria's leading tax advisory and audit firm, providing comprehensive solutions 
                for businesses of all sizes.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Contact Information</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-blue-100">+234 (0) 1 234 5678</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span className="text-blue-100">info@nolands.ng</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-blue-100">Lagos, Nigeria</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-4">Services</h4>
              <ul className="space-y-2 text-blue-100">
                <li>Tax Advisory</li>
                <li>Tax Risk Insurance</li>
                <li>Audit & Assurance</li>
                <li>Tax Health Checks</li>
                <li>Compliance Services</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-blue-600 mt-8 pt-8 text-center">
            <p className="text-blue-100">
              © 2024 Nolands Nigeria. All rights reserved. | 
              <a href="#" className="hover:text-white ml-2">Privacy Policy</a> | 
              <a href="#" className="hover:text-white ml-2">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
