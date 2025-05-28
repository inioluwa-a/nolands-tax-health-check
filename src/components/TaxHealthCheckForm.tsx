
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

interface FormData {
  // Section A: Basic Company Information
  fullName: string;
  position: string;
  email: string;
  companyName: string;
  businessType: string;
  rcNumber: string;
  tin: string;
  numberOfEmployees: string;
  annualTurnover: string;
  
  // Section B: Tax Health Check
  firsRegistered: string;
  monthlyVAT: string;
  payeOnTime: string;
  taxAudit: string;
  withholdingTax: string;
  taxHealthComment: string;
  
  // Section C: Compliance Checks
  cacReturns: string;
  digitalRecords: string;
  directorsIncomeTax: string;
  complianceComment: string;
  
  // Section D: Client Signature
  clientName: string;
  signatureDate: string;
}

const TaxHealthCheckForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    position: '',
    email: '',
    companyName: '',
    businessType: '',
    rcNumber: '',
    tin: '',
    numberOfEmployees: '',
    annualTurnover: '',
    firsRegistered: '',
    monthlyVAT: '',
    payeOnTime: '',
    taxAudit: '',
    withholdingTax: '',
    taxHealthComment: '',
    cacReturns: '',
    digitalRecords: '',
    directorsIncomeTax: '',
    complianceComment: '',
    clientName: '',
    signatureDate: new Date().toISOString().split('T')[0]
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!(formData.fullName && formData.position && formData.email && 
                 formData.companyName && formData.businessType && formData.tin && 
                 formData.numberOfEmployees && formData.annualTurnover);
      case 2:
        return !!(formData.firsRegistered && formData.monthlyVAT && formData.payeOnTime && 
                 formData.taxAudit && formData.withholdingTax);
      case 3:
        return !!(formData.cacReturns && formData.digitalRecords && formData.directorsIncomeTax);
      case 4:
        return !!formData.clientName;
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(4)) return;
    
    // Create FormData for submission
    const submitData = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      submitData.append(key, value);
    });

    try {
      const response = await fetch('https://formspree.io/f/meogdgvr', {
        method: 'POST',
        body: submitData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitted(true);
        console.log('Form submitted successfully');
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl mx-auto">
          <CardContent className="text-center p-8">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="font-locator-display font-bold text-2xl text-nolands-primary mb-4">
              Thank You for Your Submission!
            </h2>
            <p className="text-gray-600 mb-6">
              Your Tax Health Check form has been successfully submitted. Our team at Nolands Nigeria will review your information and contact you shortly.
            </p>
            <p className="text-sm text-gray-500">
              A copy of your submission has been sent to your email address, and our team has been notified at contacts@nolands.ng
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const stepTitles = [
    "Basic Company Information",
    "Tax Health Check", 
    "Compliance Checks",
    "Client Signature"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-nolands-primary text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="https://nolands.global/theme/assets/icon-nolands-logo-white-small.svg" 
            alt="Nolands Logo" 
            className="h-12 mx-auto mb-4"
          />
          <h1 className="font-locator-display font-bold text-3xl md:text-4xl mb-2">
            Nolands NG.
          </h1>
          <h2 className="font-locator font-bold text-xl md:text-2xl mb-2">
            Tax Advisory Audit
          </h2>
          <h3 className="font-locator font-bold text-lg md:text-xl mb-4">
            Tax Health Check
          </h3>
          <p className="font-locator text-sm opacity-90">
            TARICS - Tax, Accounting, Regulatory and Information Clinic Services
          </p>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-4xl mx-auto p-4 pt-8">
        <div className="flex items-center justify-between mb-8">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep > index + 1 ? 'bg-green-500 text-white' :
                currentStep === index + 1 ? 'bg-nolands-primary text-white' :
                'bg-gray-300 text-gray-600'
              }`}>
                {currentStep > index + 1 ? '✓' : index + 1}
              </div>
              <span className={`ml-2 text-sm font-medium hidden md:block ${
                currentStep === index + 1 ? 'text-nolands-primary' : 'text-gray-600'
              }`}>
                {title}
              </span>
              {index < stepTitles.length - 1 && (
                <div className={`h-1 w-8 md:w-16 mx-2 md:mx-4 ${
                  currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'
                }`} />
              )}
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} method="POST" action="https://formspree.io/f/meogdgvr">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="font-locator-display font-bold text-xl text-nolands-primary">
                Section {currentStep}: {stepTitles[currentStep - 1]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Section A: Basic Company Information */}
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="fullName" className="font-locator font-semibold">
                        Full Name of Respondent *
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="position" className="font-locator font-semibold">
                        Position *
                      </Label>
                      <Input
                        id="position"
                        name="position"
                        required
                        value={formData.position}
                        onChange={(e) => handleInputChange('position', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="font-locator font-semibold">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="companyName" className="font-locator font-semibold">
                        Company Name *
                      </Label>
                      <Input
                        id="companyName"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={(e) => handleInputChange('companyName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="businessType" className="font-locator font-semibold">
                        Business Type *
                      </Label>
                      <Input
                        id="businessType"
                        name="businessType"
                        required
                        value={formData.businessType}
                        onChange={(e) => handleInputChange('businessType', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="rcNumber" className="font-locator font-semibold">
                        RC Number (Optional)
                      </Label>
                      <Input
                        id="rcNumber"
                        name="rcNumber"
                        value={formData.rcNumber}
                        onChange={(e) => handleInputChange('rcNumber', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="tin" className="font-locator font-semibold">
                        Tax Identification Number (TIN) *
                      </Label>
                      <Input
                        id="tin"
                        name="tin"
                        required
                        value={formData.tin}
                        onChange={(e) => handleInputChange('tin', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="numberOfEmployees" className="font-locator font-semibold">
                        Number of Employees *
                      </Label>
                      <Input
                        id="numberOfEmployees"
                        name="numberOfEmployees"
                        type="number"
                        required
                        value={formData.numberOfEmployees}
                        onChange={(e) => handleInputChange('numberOfEmployees', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="annualTurnover" className="font-locator font-semibold">
                      Annual Turnover Range *
                    </Label>
                    <Select
                      name="annualTurnover"
                      value={formData.annualTurnover}
                      onValueChange={(value) => handleInputChange('annualTurnover', value)}
                      required
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select turnover range" />
                      </SelectTrigger>
                      <SelectContent className="bg-white z-50">
                        <SelectItem value="below-5m">Below ₦5M</SelectItem>
                        <SelectItem value="5m-25m">₦5M – ₦25M</SelectItem>
                        <SelectItem value="25m-100m">₦25M – ₦100M</SelectItem>
                        <SelectItem value="above-100m">Above ₦100M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {/* Section B: Tax Health Check */}
              {currentStep === 2 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Are you currently registered with FIRS?
                      </Label>
                      <RadioGroup
                        name="firsRegistered"
                        value={formData.firsRegistered}
                        onValueChange={(value) => handleInputChange('firsRegistered', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="firs-yes" />
                          <Label htmlFor="firs-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="firs-no" />
                          <Label htmlFor="firs-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Do you file monthly VAT returns?
                      </Label>
                      <RadioGroup
                        name="monthlyVAT"
                        value={formData.monthlyVAT}
                        onValueChange={(value) => handleInputChange('monthlyVAT', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="vat-yes" />
                          <Label htmlFor="vat-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="vat-no" />
                          <Label htmlFor="vat-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Do you pay PAYE on time?
                      </Label>
                      <RadioGroup
                        name="payeOnTime"
                        value={formData.payeOnTime}
                        onValueChange={(value) => handleInputChange('payeOnTime', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="paye-yes" />
                          <Label htmlFor="paye-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="paye-no" />
                          <Label htmlFor="paye-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Have you had a tax audit in the past 2 years?
                      </Label>
                      <RadioGroup
                        name="taxAudit"
                        value={formData.taxAudit}
                        onValueChange={(value) => handleInputChange('taxAudit', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="audit-yes" />
                          <Label htmlFor="audit-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="audit-no" />
                          <Label htmlFor="audit-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Are you compliant with withholding tax obligations?
                      </Label>
                      <RadioGroup
                        name="withholdingTax"
                        value={formData.withholdingTax}
                        onValueChange={(value) => handleInputChange('withholdingTax', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="withholding-yes" />
                          <Label htmlFor="withholding-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="withholding-no" />
                          <Label htmlFor="withholding-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label htmlFor="taxHealthComment" className="font-locator font-semibold">
                      Additional Comments (Tax Health Check)
                    </Label>
                    <Textarea
                      id="taxHealthComment"
                      name="taxHealthComment"
                      value={formData.taxHealthComment}
                      onChange={(e) => handleInputChange('taxHealthComment', e.target.value)}
                      className="mt-1"
                      placeholder="Any additional information or comments regarding your tax compliance..."
                    />
                  </div>
                </>
              )}

              {/* Section C: Compliance Checks */}
              {currentStep === 3 && (
                <>
                  <div className="space-y-4">
                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Have you filed your CAC Annual Returns in the last 2 years?
                      </Label>
                      <RadioGroup
                        name="cacReturns"
                        value={formData.cacReturns}
                        onValueChange={(value) => handleInputChange('cacReturns', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="cac-yes" />
                          <Label htmlFor="cac-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="cac-no" />
                          <Label htmlFor="cac-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Do you keep financial records digitally?
                      </Label>
                      <RadioGroup
                        name="digitalRecords"
                        value={formData.digitalRecords}
                        onValueChange={(value) => handleInputChange('digitalRecords', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="digital-yes" />
                          <Label htmlFor="digital-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="digital-no" />
                          <Label htmlFor="digital-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-locator font-semibold text-base">
                        Do you file personal income tax for directors?
                      </Label>
                      <RadioGroup
                        name="directorsIncomeTax"
                        value={formData.directorsIncomeTax}
                        onValueChange={(value) => handleInputChange('directorsIncomeTax', value)}
                        className="flex gap-6 mt-2"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="directors-yes" />
                          <Label htmlFor="directors-yes">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="directors-no" />
                          <Label htmlFor="directors-no">No</Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <Label htmlFor="complianceComment" className="font-locator font-semibold">
                      Additional Comments (Compliance)
                    </Label>
                    <Textarea
                      id="complianceComment"
                      name="complianceComment"
                      value={formData.complianceComment}
                      onChange={(e) => handleInputChange('complianceComment', e.target.value)}
                      className="mt-1"
                      placeholder="Any additional information or comments regarding your compliance status..."
                    />
                  </div>
                </>
              )}

              {/* Section D: Client Signature */}
              {currentStep === 4 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="clientName" className="font-locator font-semibold">
                        Client Name *
                      </Label>
                      <Input
                        id="clientName"
                        name="clientName"
                        required
                        value={formData.clientName}
                        onChange={(e) => handleInputChange('clientName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="signatureDate" className="font-locator font-semibold">
                        Date *
                      </Label>
                      <Input
                        id="signatureDate"
                        name="signatureDate"
                        type="date"
                        required
                        value={formData.signatureDate}
                        onChange={(e) => handleInputChange('signatureDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 font-locator">
                      By submitting this form, I confirm that the information provided is accurate and complete to the best of my knowledge. I understand that this information will be used by Nolands Nigeria for the purpose of conducting a tax health check and providing relevant advisory services.
                    </p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <span className="text-sm text-gray-600">
              Step {currentStep} of 4
            </span>

            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={nextStep}
                disabled={!validateStep(currentStep)}
                className="bg-nolands-primary hover:bg-nolands-primary/90 flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Button>
            ) : (
              <Button 
                type="submit" 
                disabled={!validateStep(4)}
                className="bg-nolands-primary hover:bg-nolands-primary/90 text-white font-locator font-bold px-8"
              >
                Submit Tax Health Check
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="bg-nolands-primary text-white py-6 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-locator text-sm">
            © 2024 Nolands Nigeria. All rights reserved. | contacts@nolands.ng
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxHealthCheckForm;
