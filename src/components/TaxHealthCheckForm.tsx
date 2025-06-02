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
  // Basic Information
  nameOfRespondent: string;
  nameOfOrganization: string;
  designation: string;
  email: string;
  businessType: string;
  rcNumber: string;
  tin: string;
  numberOfEmployees: string;
  annualTurnover: string;
  signatureDate: string;
  
  // Section I: General
  firsRegistered: string;
  firsRegisteredComment: string;
  taxFileLocation: string;
  taxFileLocationComment: string;
  employeesOtherStates: string;
  employeesOtherStatesComment: string;
  stateIrsRegistered: string;
  stateIrsRegisteredComment: string;
  officeLocation: string;
  officeLocationComment: string;
  monthlyReconciliations: string;
  monthlyReconciliationsComment: string;
  reconcilingItems: string;
  reconcilingItemsComment: string;
  parentSubsidiary: string;
  parentSubsidiaryComment: string;
  relatedPartiesOutsideNigeria: string;
  relatedPartiesOutsideNigeriaComment: string;
  groupHeadOfficeLocation: string;
  groupHeadOfficeLocationComment: string;
  relatedPartyContracts: string;
  relatedPartyContractsComment: string;
  transactionsRelatedParties: string;
  transactionsRelatedPartiesComment: string;
  
  // Section II: Withholding Tax
  vendorRegistration: string;
  vendorRegistrationComment: string;
  taxesWithheld: string;
  taxesWithheldComment: string;
  applicableRates: string;
  applicableRatesComment: string;
  taxesRemitted: string;
  taxesRemittedComment: string;
  whtCreditNotes: string;
  whtCreditNotesComment: string;
  obtainedWhtCreditNotes: string;
  obtainedWhtCreditNotesComment: string;
  
  // Section III: Personal Income Tax
  allIncomesIncluded: string;
  allIncomesIncludedComment: string;
  correctTaxReliefs: string;
  correctTaxReliefsComment: string;
  reliefsSupported: string;
  reliefsSupportedComment: string;
  benefitsInKindDisclosed: string;
  benefitsInKindDisclosedComment: string;
  guesthouseOfficialAccommodation: string;
  guesthouseOfficialAccommodationComment: string;
  rentAddedToIncome: string;
  rentAddedToIncomeComment: string;
  housingRentsWithholding: string;
  housingRentsWithholdingComment: string;
  vehicleUsage: string;
  vehicleUsageComment: string;
  billsPaidByCompany: string;
  billsPaidByCompanyComment: string;
  assetsProvidedBenefit: string;
  assetsProvidedBenefitComment: string;
  domesticServantWages: string;
  domesticServantWagesComment: string;
  mealProvision: string;
  mealProvisionComment: string;
  exGratiaPayments: string;
  exGratiaPaymentsComment: string;
  voluntaryPensionContribution: string;
  voluntaryPensionContributionComment: string;
  lifeAssurancePolicies: string;
  lifeAssurancePoliciesComment: string;
  statutoryDeductions: string;
  statutoryDeductionsComment: string;
  expatriateStaff: string;
  expatriateStaffComment: string;
  expatriateDaysRecord: string;
  expatriateDaysRecordComment: string;
  expatriateQuota: string;
  expatriateQuotaComment: string;
  expatriateReturns: string;
  expatriateReturnsComment: string;
  
  // Section IV: VAT
  vatRegistered: string;
  vatRegisteredComment: string;
  vatReturnsMonthly: string;
  vatReturnsMonthlyComment: string;
  vatInputsRecord: string;
  vatInputsRecordComment: string;
  vatPaymentsOffset: string;
  vatPaymentsOffsetComment: string;
  netVatPayments: string;
  netVatPaymentsComment: string;
  refundableVatCarried: string;
  refundableVatCarriedComment: string;
  litigationReadiness: string;
  litigationReadinessComment: string;
  
  // Section V: Company Income Tax
  selfAssessmentReturns: string;
  selfAssessmentReturnsComment: string;
  adequateProvision: string;
  adequateProvisionComment: string;
  fixedAssetsAdditions: string;
  fixedAssetsAdditionsComment: string;
  certificateAcceptance: string;
  certificateAcceptanceComment: string;
  operatingLeaseList: string;
  operatingLeaseListComment: string;
  disposedAssetsList: string;
  disposedAssetsListComment: string;
  disposedAssetsDetails: string;
  disposedAssetsDetailsComment: string;
  operatingExpensesDescriptive: string;
  operatingExpensesDescriptiveComment: string;
  expenseSupportingDocs: string;
  expenseSupportingDocsComment: string;
  capitalNatureExpenses: string;
  capitalNatureExpensesComment: string;
  disposalProfitLoss: string;
  disposalProfitLossComment: string;
  approvedDonations: string;
  approvedDonationsComment: string;
  capitalNatureDonations: string;
  capitalNatureDonationsComment: string;
  donationsLimit: string;
  donationsLimitComment: string;
  rentalCharges: string;
  rentalChargesComment: string;
  taxesSufferedAtSource: string;
  taxesSufferedAtSourceComment: string;
  debtsOrdinaryCourse: string;
  debtsOrdinaryCourseComment: string;
  badDebtsSpecific: string;
  badDebtsSpecificComment: string;
  recoveryEfforts: string;
  recoveryEffortsComment: string;
  writeOffsIncome: string;
  writeOffsIncomeComment: string;
}

const TaxHealthCheckForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    nameOfRespondent: '',
    nameOfOrganization: '',
    designation: '',
    email: '',
    businessType: '',
    rcNumber: '',
    tin: '',
    numberOfEmployees: '',
    annualTurnover: '',
    signatureDate: new Date().toISOString().split('T')[0],
    
    // Section I
    firsRegistered: '', firsRegisteredComment: '',
    taxFileLocation: '', taxFileLocationComment: '',
    employeesOtherStates: '', employeesOtherStatesComment: '',
    stateIrsRegistered: '', stateIrsRegisteredComment: '',
    officeLocation: '', officeLocationComment: '',
    monthlyReconciliations: '', monthlyReconciliationsComment: '',
    reconcilingItems: '', reconcilingItemsComment: '',
    parentSubsidiary: '', parentSubsidiaryComment: '',
    relatedPartiesOutsideNigeria: '', relatedPartiesOutsideNigeriaComment: '',
    groupHeadOfficeLocation: '', groupHeadOfficeLocationComment: '',
    relatedPartyContracts: '', relatedPartyContractsComment: '',
    transactionsRelatedParties: '', transactionsRelatedPartiesComment: '',
    
    // Section II
    vendorRegistration: '', vendorRegistrationComment: '',
    taxesWithheld: '', taxesWithheldComment: '',
    applicableRates: '', applicableRatesComment: '',
    taxesRemitted: '', taxesRemittedComment: '',
    whtCreditNotes: '', whtCreditNotesComment: '',
    obtainedWhtCreditNotes: '', obtainedWhtCreditNotesComment: '',
    
    // Section III
    allIncomesIncluded: '', allIncomesIncludedComment: '',
    correctTaxReliefs: '', correctTaxReliefsComment: '',
    reliefsSupported: '', reliefsSupportedComment: '',
    benefitsInKindDisclosed: '', benefitsInKindDisclosedComment: '',
    guesthouseOfficialAccommodation: '', guesthouseOfficialAccommodationComment: '',
    rentAddedToIncome: '', rentAddedToIncomeComment: '',
    housingRentsWithholding: '', housingRentsWithholdingComment: '',
    vehicleUsage: '', vehicleUsageComment: '',
    billsPaidByCompany: '', billsPaidByCompanyComment: '',
    assetsProvidedBenefit: '', assetsProvidedBenefitComment: '',
    domesticServantWages: '', domesticServantWagesComment: '',
    mealProvision: '', mealProvisionComment: '',
    exGratiaPayments: '', exGratiaPaymentsComment: '',
    voluntaryPensionContribution: '', voluntaryPensionContributionComment: '',
    lifeAssurancePolicies: '', lifeAssurancePoliciesComment: '',
    statutoryDeductions: '', statutoryDeductionsComment: '',
    expatriateStaff: '', expatriateStaffComment: '',
    expatriateDaysRecord: '', expatriateDaysRecordComment: '',
    expatriateQuota: '', expatriateQuotaComment: '',
    expatriateReturns: '', expatriateReturnsComment: '',
    
    // Section IV
    vatRegistered: '', vatRegisteredComment: '',
    vatReturnsMonthly: '', vatReturnsMonthlyComment: '',
    vatInputsRecord: '', vatInputsRecordComment: '',
    vatPaymentsOffset: '', vatPaymentsOffsetComment: '',
    netVatPayments: '', netVatPaymentsComment: '',
    refundableVatCarried: '', refundableVatCarriedComment: '',
    litigationReadiness: '', litigationReadinessComment: '',
    
    // Section V
    selfAssessmentReturns: '', selfAssessmentReturnsComment: '',
    adequateProvision: '', adequateProvisionComment: '',
    fixedAssetsAdditions: '', fixedAssetsAdditionsComment: '',
    certificateAcceptance: '', certificateAcceptanceComment: '',
    operatingLeaseList: '', operatingLeaseListComment: '',
    disposedAssetsList: '', disposedAssetsListComment: '',
    disposedAssetsDetails: '', disposedAssetsDetailsComment: '',
    operatingExpensesDescriptive: '', operatingExpensesDescriptiveComment: '',
    expenseSupportingDocs: '', expenseSupportingDocsComment: '',
    capitalNatureExpenses: '', capitalNatureExpensesComment: '',
    disposalProfitLoss: '', disposalProfitLossComment: '',
    approvedDonations: '', approvedDonationsComment: '',
    capitalNatureDonations: '', capitalNatureDonationsComment: '',
    donationsLimit: '', donationsLimitComment: '',
    rentalCharges: '', rentalChargesComment: '',
    taxesSufferedAtSource: '', taxesSufferedAtSourceComment: '',
    debtsOrdinaryCourse: '', debtsOrdinaryCourseComment: '',
    badDebtsSpecific: '', badDebtsSpecificComment: '',
    recoveryEfforts: '', recoveryEffortsComment: '',
    writeOffsIncome: '', writeOffsIncomeComment: '',
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
        return !!(formData.nameOfRespondent && formData.nameOfOrganization && 
                 formData.designation && formData.email && formData.businessType && 
                 formData.tin && formData.numberOfEmployees && formData.annualTurnover);
      case 2:
        return !!(formData.firsRegistered && formData.taxFileLocation && 
                 formData.employeesOtherStates && formData.stateIrsRegistered && 
                 formData.officeLocation);
      case 3:
        return !!(formData.vendorRegistration && formData.taxesWithheld && 
                 formData.applicableRates && formData.taxesRemitted);
      case 4:
        return !!(formData.allIncomesIncluded && formData.correctTaxReliefs && 
                 formData.reliefsSupported && formData.benefitsInKindDisclosed);
      case 5:
        return !!(formData.vatRegistered && formData.vatReturnsMonthly && 
                 formData.vatInputsRecord && formData.vatPaymentsOffset);
      case 6:
        return !!(formData.selfAssessmentReturns && formData.adequateProvision && 
                 formData.fixedAssetsAdditions);
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 6) {
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
    
    if (!validateStep(6)) return;
    
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

  const renderQuestionRow = (
    question: string,
    fieldName: keyof FormData,
    commentFieldName: keyof FormData,
    includeNotApplicable: boolean = true
  ) => (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 items-start py-3 border-b border-gray-100">
      <div className="lg:col-span-1">
        <Label className="font-locator text-sm">{question}</Label>
      </div>
      <div className="lg:col-span-1">
        <RadioGroup
          name={fieldName}
          value={formData[fieldName]}
          onValueChange={(value) => handleInputChange(fieldName, value)}
          className="flex gap-4"
        >
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="yes" id={`${fieldName}-yes`} />
            <Label htmlFor={`${fieldName}-yes`} className="text-xs">Yes</Label>
          </div>
          <div className="flex items-center space-x-1">
            <RadioGroupItem value="no" id={`${fieldName}-no`} />
            <Label htmlFor={`${fieldName}-no`} className="text-xs">No</Label>
          </div>
          {includeNotApplicable && (
            <div className="flex items-center space-x-1">
              <RadioGroupItem value="na" id={`${fieldName}-na`} />
              <Label htmlFor={`${fieldName}-na`} className="text-xs">N/A</Label>
            </div>
          )}
        </RadioGroup>
      </div>
      <div className="lg:col-span-2">
        <Textarea
          name={commentFieldName}
          value={formData[commentFieldName]}
          onChange={(e) => handleInputChange(commentFieldName, e.target.value)}
          className="min-h-[60px] text-sm"
          placeholder="Comments..."
        />
      </div>
    </div>
  );

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
    "Basic Information",
    "General", 
    "Withholding Tax",
    "Personal Income Tax",
    "Value Added Tax (VAT)",
    "Company Income Tax"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-nolands-primary text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* First Heading - Logo and NG. */}
          <div className="flex items-center justify-center mb-6">
            <img 
              src="https://nolands.global/theme/assets/icon-nolands-logo-white-small.svg" 
              alt="Nolands Logo" 
              className="h-12 mr-4"
            />
            <div className="text-left">
              <h1 className="font-locator-display font-bold text-3xl md:text-4xl">
                NG.
              </h1>
              <p className="font-locator text-sm opacity-90 mt-1">
                Tax. Advisory. Audit.
              </p>
            </div>
          </div>
          
          {/* Second Heading - Tax Health Check */}
          <div>
            <h2 className="font-locator font-bold text-xl md:text-2xl mb-2">
              TARICS - Tax, Accounting, Regulatory and Information Clinic Services
            </h2>
            <p className="font-locator text-sm opacity-90">
              Tax Health Check
            </p>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="max-w-6xl mx-auto p-4 pt-8">
        <div className="flex items-center justify-between mb-8 overflow-x-auto">
          {stepTitles.map((title, index) => (
            <div key={index} className="flex items-center min-w-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                currentStep > index + 1 ? 'bg-green-500 text-white' :
                currentStep === index + 1 ? 'bg-nolands-primary text-white' :
                'bg-gray-300 text-gray-600'
              }`}>
                {currentStep > index + 1 ? '✓' : index + 1}
              </div>
              <span className={`ml-3 text-sm font-medium ${
                currentStep === index + 1 ? 'text-nolands-primary font-bold' : 'text-gray-600'
              }`}>
                {title}
              </span>
              {index < stepTitles.length - 1 && (
                <div className={`h-1 w-8 lg:w-12 mx-4 ${
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
                {stepTitles[currentStep - 1]}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              
              {/* Basic Information */}
              {currentStep === 1 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="nameOfRespondent" className="font-locator font-semibold">
                        Name of Respondent *
                      </Label>
                      <Input
                        id="nameOfRespondent"
                        name="nameOfRespondent"
                        required
                        value={formData.nameOfRespondent}
                        onChange={(e) => handleInputChange('nameOfRespondent', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="nameOfOrganization" className="font-locator font-semibold">
                        Name of Organization *
                      </Label>
                      <Input
                        id="nameOfOrganization"
                        name="nameOfOrganization"
                        required
                        value={formData.nameOfOrganization}
                        onChange={(e) => handleInputChange('nameOfOrganization', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="designation" className="font-locator font-semibold">
                        Designation *
                      </Label>
                      <Input
                        id="designation"
                        name="designation"
                        required
                        value={formData.designation}
                        onChange={(e) => handleInputChange('designation', e.target.value)}
                        className="mt-1"
                      />
                    </div>
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
                        Tax Identification Number (TIN) (Optional)                  </Label>
                      <Input
                        id="tin"
                        name="tin"
                  
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
                </>
              )}

              {/* Section I: General */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  {renderQuestionRow(
                    "Has company been registered with FIRS?",
                    'firsRegistered',
                    'firsRegisteredComment'
                  )}
                  
                  {renderQuestionRow(
                    "Which location will company prefer to have its tax file domiciled?",
                    'taxFileLocation',
                    'taxFileLocationComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are there employees resident in states other than Lagos? (mention other states under the comment column)",
                    'employeesOtherStates',
                    'employeesOtherStatesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Has the company registered with any state IRS office?",
                    'stateIrsRegistered',
                    'stateIrsRegisteredComment'
                  )}
                  
                  {renderQuestionRow(
                    "Where is the company's office located?",
                    'officeLocation',
                    'officeLocationComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are monthly reconciliations carried out between the various tax sub-ledgers and General ledger?",
                    'monthlyReconciliations',
                    'monthlyReconciliationsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are all reconciling items promptly followed up and properly resolved?",
                    'reconcilingItems',
                    'reconcilingItemsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is the company a parent company or subsidiary of another company?",
                    'parentSubsidiary',
                    'parentSubsidiaryComment'
                  )}
                  
                  {renderQuestionRow(
                    "Does the company have related parties outside Nigeria?",
                    'relatedPartiesOutsideNigeria',
                    'relatedPartiesOutsideNigeriaComment'
                  )}
                  
                  {renderQuestionRow(
                    "Where is the Head Office of the Group located?",
                    'groupHeadOfficeLocation',
                    'groupHeadOfficeLocationComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are related party transactions supported by properly executed contract agreements?",
                    'relatedPartyContracts',
                    'relatedPartyContractsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have there been transactions between Nigerian office and the other related parties?",
                    'transactionsRelatedParties',
                    'transactionsRelatedPartiesComment'
                  )}
                </div>
              )}

              {/* Section II: Withholding Tax */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  {renderQuestionRow(
                    "Does the company observe a vendor registration process?",
                    'vendorRegistration',
                    'vendorRegistrationComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have taxes been withheld from payments to which they are applicable?",
                    'taxesWithheld',
                    'taxesWithheldComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have applicable rates been applied in calculating and deducting withholding tax on payments made or credit granted by the company?",
                    'applicableRates',
                    'applicableRatesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have deducted taxes been remitted to the appropriate tax authorities through the designated banks?",
                    'taxesRemitted',
                    'taxesRemittedComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have Withholding tax (WHT) credit notes been processed, obtained, and forwarded to their respective owners?",
                    'whtCreditNotes',
                    'whtCreditNotesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Has the company obtained Withholding Tax credit notes from FIRS?",
                    'obtainedWhtCreditNotes',
                    'obtainedWhtCreditNotesComment'
                  )}
                </div>
              )}

              {/* Section III: Personal Income Tax */}
              {currentStep === 4 && (
                <div className="space-y-4">
                  {renderQuestionRow(
                    "Are all incomes (including allowances and benefits in kind) on the employees' personal records included in the payroll?",
                    'allIncomesIncluded',
                    'allIncomesIncludedComment'
                  )}
                  
                  {renderQuestionRow(
                    "Has the correct calculation of tax reliefs in accordance with the relevant regulations been made as listed in Schedule II?",
                    'correctTaxReliefs',
                    'correctTaxReliefsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are all reliefs claimed and granted valid and supported with documented evidence?",
                    'reliefsSupported',
                    'reliefsSupportedComment'
                  )}
                  
                  {renderQuestionRow(
                    "Has the company disclosed on behalf of each employee, benefits-in-kind he enjoys by virtue of his employment?",
                    'benefitsInKindDisclosed',
                    'benefitsInKindDisclosedComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is the house being provided to the employee a guesthouse or official accommodation for the employee's exclusive occupation?",
                    'guesthouseOfficialAccommodation',
                    'guesthouseOfficialAccommodationComment'
                  )}
                  
                  {renderQuestionRow(
                    "If the accommodation provided by the employer is rented, has the annual rent been added to the taxable income for the employee?",
                    'rentAddedToIncome',
                    'rentAddedToIncomeComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have all housing rents paid off-payroll directly to employees' landlords been subjected to deduction of withholding tax at the rate of 10%?",
                    'housingRentsWithholding',
                    'housingRentsWithholdingComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is the vehicle given to the employee being used as an official car or as a pool car?",
                    'vehicleUsage',
                    'vehicleUsageComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have all bills paid by the company on behalf of the employee been added to the employees' taxable income?",
                    'billsPaidByCompany',
                    'billsPaidByCompanyComment'
                  )}
                  
                  {renderQuestionRow(
                    "For all other assets provided by the employer for the employees' benefit, has 5% of the cost of these assets been calculated and added to the employees' remuneration?",
                    'assetsProvidedBenefit',
                    'assetsProvidedBenefitComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have the total annual wages paid in respect of domestic servant(s) being used by the employees been added to the employees' taxable income?",
                    'domesticServantWages',
                    'domesticServantWagesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Does the company have provision for meals in any canteen or luncheon vouchers for its employees?",
                    'mealProvision',
                    'mealProvisionComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have all ex-gratia payments, 13th month salary and bonus with the exception of end-of-service gratuities been taxed in the hands of employees?",
                    'exGratiaPayments',
                    'exGratiaPaymentsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are there staff interested in making voluntary pension contribution?",
                    'voluntaryPensionContribution',
                    'voluntaryPensionContributionComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are there staff on Life Assurance policies?",
                    'lifeAssurancePolicies',
                    'lifeAssurancePoliciesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have all other statutory deductions been made from the payroll at the current rates? (NSITF - 1% of total gross salary, NHF - 2.5% of annual basic salary)",
                    'statutoryDeductions',
                    'statutoryDeductionsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are there expatriate staff in the company?",
                    'expatriateStaff',
                    'expatriateStaffComment'
                  )}
                  
                  {renderQuestionRow(
                    "For all expatriates, is there a record clearly indicating the number of days spent in Nigeria on account of the Company's duties?",
                    'expatriateDaysRecord',
                    'expatriateDaysRecordComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have the company obtained expatriate quota?",
                    'expatriateQuota',
                    'expatriateQuotaComment'
                  )}
                  
                  {renderQuestionRow(
                    "Do the company file their expatriate returns?",
                    'expatriateReturns',
                    'expatriateReturnsComment'
                  )}
                </div>
              )}

              {/* Section IV: VAT */}
              {currentStep === 5 && (
                <div className="space-y-4">
                  {renderQuestionRow(
                    "Is the Company registered with local VAT offices nearest to it in all its locations?",
                    'vatRegistered',
                    'vatRegisteredComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are VAT returns filed monthly?",
                    'vatReturnsMonthly',
                    'vatReturnsMonthlyComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is there a record (especially receipts) of VAT paid on all inputs to the Company's sales?",
                    'vatInputsRecord',
                    'vatInputsRecordComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are these payments used to offset the VAT payable for each period?",
                    'vatPaymentsOffset',
                    'vatPaymentsOffsetComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are payments of net VAT payable (if any) made within the statutory period?",
                    'netVatPayments',
                    'netVatPaymentsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is refundable VAT (if any) carried forward on subsequent months' VAT returns?",
                    'refundableVatCarried',
                    'refundableVatCarriedComment'
                  )}
                  
                  {renderQuestionRow(
                    "In the case of any ambiguity leading to different interpretations of the law and subsequently, litigation, is the company ready to pursue the litigation option or settle out of court?",
                    'litigationReadiness',
                    'litigationReadinessComment'
                  )}
                </div>
              )}

              {/* Section V: Company Income Tax */}
              {currentStep === 6 && (
                <div className="space-y-4">
                  <div className="font-semibold text-gray-700 py-2">GENERAL</div>
                  
                  {renderQuestionRow(
                    "Does the Company file its tax returns based on self-assessment?",
                    'selfAssessmentReturns',
                    'selfAssessmentReturnsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is there adequate provision (at least 32.5% of assessable profits) in the books for the tax liability?",
                    'adequateProvision',
                    'adequateProvisionComment'
                  )}
                  
                  <div className="font-semibold text-gray-700 py-2">FIXED ASSETS</div>
                  
                  {renderQuestionRow(
                    "Has a list of additions to fixed assets been prepared for the current year?",
                    'fixedAssetsAdditions',
                    'fixedAssetsAdditionsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Has the company applied for, processed, and obtained Certificate of acceptance in respect of additions to individual assets above 500,000 from the Ministry of Industries?",
                    'certificateAcceptance',
                    'certificateAcceptanceComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is there a list of assets leased to customers under operating lease agreement that includes details about customers, type of business engaged in and description of the assets?",
                    'operatingLeaseList',
                    'operatingLeaseListComment'
                  )}
                  
                  {renderQuestionRow(
                    "Is there a list of fixed / leased assets disposed during the period?",
                    'disposedAssetsList',
                    'disposedAssetsListComment'
                  )}
                  
                  {renderQuestionRow(
                    "For assets disposed whose sales proceeds exceed the cost, have the following additional information been provided? (Cost of repairs, advertising cost, professional fees, purchaser details, arm's length evidence)",
                    'disposedAssetsDetails',
                    'disposedAssetsDetailsComment'
                  )}
                  
                  <div className="font-semibold text-gray-700 py-2">PROFIT AND LOSS ACCOUNT ITEMS</div>
                  
                  {renderQuestionRow(
                    "Are all operating expense items specific and descriptive?",
                    'operatingExpensesDescriptive',
                    'operatingExpensesDescriptiveComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are there supporting documents for all expenses incurred during the year?",
                    'expenseSupportingDocs',
                    'expenseSupportingDocsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are there repairs or maintenance expenses of a capital nature during the year? If yes, have these been capitalised?",
                    'capitalNatureExpenses',
                    'capitalNatureExpensesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Does profit / loss recognised on the disposal agree with the Financial Statement?",
                    'disposalProfitLoss',
                    'disposalProfitLossComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are subscriptions and donations been made to bodies approved by the Tax Act?",
                    'approvedDonations',
                    'approvedDonationsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are donations of a capital nature? Donations of a capital nature are not allowable.",
                    'capitalNatureDonations',
                    'capitalNatureDonationsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are total donations up to 10% of total profits? This is the maximum allowable on deductions.",
                    'donationsLimit',
                    'donationsLimitComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have rental charges in respect of residential accommodation occupied by employees of the Company been computed?",
                    'rentalCharges',
                    'rentalChargesComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have all taxes suffered by deductions at source been used to reduce the Company's tax liability?",
                    'taxesSufferedAtSource',
                    'taxesSufferedAtSourceComment'
                  )}
                  
                  <div className="font-semibold text-gray-700 py-2">BAD AND DOUBTFUL DEBTS</div>
                  
                  {renderQuestionRow(
                    "Were the debts incurred in the ordinary course of the Company's business?",
                    'debtsOrdinaryCourse',
                    'debtsOrdinaryCourseComment'
                  )}
                  
                  {renderQuestionRow(
                    "Are amounts recognised as bad and doubtful debts specific, with names and addresses included as part of details?",
                    'badDebtsSpecific',
                    'badDebtsSpecificComment'
                  )}
                  
                  {renderQuestionRow(
                    "Has evidence of efforts made to recover the debts (e.g. correspondence with the debtor, bank, lawyer etc) been documented?",
                    'recoveryEfforts',
                    'recoveryEffortsComment'
                  )}
                  
                  {renderQuestionRow(
                    "Have write-offs (previously allowed) for doubtful debts no longer required been recognised as income in the year?",
                    'writeOffsIncome',
                    'writeOffsIncomeComment'
                  )}
                </div>
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
              Step {currentStep} of 6
            </span>

            {currentStep < 6 ? (
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
                disabled={!validateStep(6)}
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
        <div className="max-w-6xl mx-auto text-center">
          <p className="font-locator text-sm">
            © 2024 Nolands Nigeria. All rights reserved. | contacts@nolands.ng
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaxHealthCheckForm;
