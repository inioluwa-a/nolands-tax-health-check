import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define types for form questions and data
type QuestionType = 'text' | 'textarea' | 'select' | 'checkbox' | 'radio';

interface Question {
  question: string;
  type: QuestionType;
  options?: string[];
  required?: boolean;
  placeholder?: string;
}

interface Step {
  id: string;
  title: string;
  questions: Question[];
}

interface FormData {
  [key: string]: any;
}

// Define form questions for each step
const basicInformationQuestions: Question[] = [
  {
    question: "Company Name",
    type: "text",
    required: true,
    placeholder: "Enter company name",
  },
  {
    question: "Contact Person",
    type: "text",
    required: true,
    placeholder: "Enter contact person name",
  },
  {
    question: "Email Address",
    type: "text",
    required: true,
    placeholder: "Enter email address",
  },
  {
    question: "Phone Number",
    type: "text",
    required: true,
    placeholder: "Enter phone number",
  },
  {
    question: "Company Address",
    type: "textarea",
    required: true,
    placeholder: "Enter company address",
  },
  {
    question: "Tax Identification Number (TIN)",
    type: "text",
    required: false,
    placeholder: "Enter TIN (optional)",
  },
  {
    question: "RC Number",
    type: "text",
    required: false,
    placeholder: "Enter RC Number (optional)",
  },
];

const generalQuestions: Question[] = [
  { question: 'What is your industry?', type: 'text', required: true, placeholder: 'Enter your industry' },
  { question: 'How many employees do you have?', type: 'select', options: ['1-10', '11-50', '51-200', '201+'], required: true, placeholder: 'Select number of employees' },
  { question: 'What is your annual turnover?', type: 'text', required: true, placeholder: 'Enter annual turnover' },
  { question: 'Are you registered for VAT?', type: 'radio', options: ['Yes', 'No'], required: true },
];

const withholdingTaxQuestions: Question[] = [
  { question: 'Do you deduct and remit withholding tax?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you file monthly WHT returns?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you have any outstanding WHT liabilities?', type: 'radio', options: ['Yes', 'No'], required: true },
];

const personalIncomeTaxQuestions: Question[] = [
  { question: 'Do you deduct and remit PAYE tax?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you file annual PAYE returns?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you issue annual tax certificates to employees?', type: 'radio', options: ['Yes', 'No'], required: true },
];

const vatQuestions: Question[] = [
  { question: 'Do you charge VAT on your invoices?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you file monthly VAT returns?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you have any outstanding VAT liabilities?', type: 'radio', options: ['Yes', 'No'], required: true },
];

const companyIncomeTaxQuestions: Question[] = [
  { question: 'Do you file annual CIT returns?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you pay CIT on time?', type: 'radio', options: ['Yes', 'No'], required: true },
  { question: 'Do you have any outstanding CIT liabilities?', type: 'radio', options: ['Yes', 'No'], required: true },
];

// Initial form data
const initialFormData: FormData = {
  '0-0': '',
  '0-1': '',
  '0-2': '',
  '0-3': '',
  '0-4': '',
  '1-0': '',
  '1-1': '',
  '1-2': '',
  '1-3': '',
  '2-0': '',
  '2-1': '',
  '2-2': '',
  '3-0': '',
  '3-1': '',
  '3-2': '',
  '4-0': '',
  '4-1': '',
  '4-2': '',
  '5-0': '',
  '5-1': '',
  '5-2': '',
};

const TaxHealthCheckForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const steps = [
    { id: 'basic', title: 'Basic Information', questions: basicInformationQuestions },
    { id: 'general', title: 'General', questions: generalQuestions },
    { id: 'withholding', title: 'Withholding Tax', questions: withholdingTaxQuestions },
    { id: 'personal', title: 'Personal Income Tax', questions: personalIncomeTaxQuestions },
    { id: 'vat', title: 'Value Added Tax (VAT)', questions: vatQuestions },
    { id: 'company', title: 'Company Income Tax', questions: companyIncomeTaxQuestions },
  ];

  const validateField = (stepIndex: number, questionIndex: number, value: any): string | undefined => {
    const question = steps[stepIndex].questions[questionIndex];
    if (question.required && !value) {
      return `${question.question} is required`;
    }
    return undefined;
  };

  const updateAnswer = (stepIndex: number, questionIndex: number, value: any) => {
    const questionId = `${stepIndex}-${questionIndex}`;
    setFormData({ ...formData, [questionId]: value });

    // Clear any existing error for this question
    setErrors({ ...errors, [questionId]: undefined });
  };

  const getQuestionValue = (stepIndex: number, questionIndex: number) => {
    return formData[`${stepIndex}-${questionIndex}`];
  };

  const handleNext = () => {
    const step = steps[currentStep];
    let newErrors: Record<string, string> = {};
    let hasErrors = false;

    step.questions.forEach((question, questionIndex) => {
      const questionId = `${currentStep}-${questionIndex}`;
      const value = getQuestionValue(currentStep, questionIndex);
      const error = validateField(currentStep, questionIndex, value);

      if (error) {
        newErrors[questionId] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (!hasErrors) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    // Validate all fields before submitting
    let newErrors: Record<string, string> = {};
    let hasErrors = false;

    steps.forEach((step, stepIndex) => {
      step.questions.forEach((question, questionIndex) => {
        const questionId = `${stepIndex}-${questionIndex}`;
        const value = getQuestionValue(stepIndex, questionIndex);
        const error = validateField(stepIndex, questionIndex, value);

        if (error) {
          newErrors[questionId] = error;
          hasErrors = true;
        }
      });
    });

    setErrors(newErrors);

    if (!hasErrors) {
      // Process form submission here
      console.log('Form Data:', formData);
      toast({
        title: "Success",
        description: "Tax Health Check submitted successfully!",
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-nolands-primary">NG.</span>
            <div className="text-xs text-gray-600">Tax. Advisory. Audit.</div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-nolands-primary mb-2">Tax Health Check</h1>
        <p className="text-sm text-gray-600 mb-2">
          TARICS - Tax, Accounting, Regulatory and Information Clinic Services
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-gray-500">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% Complete
          </span>
        </div>
        <Progress value={((currentStep + 1) / steps.length) * 100} className="h-2" />
      </div>

      {/* Current Step Only */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <div className="bg-nolands-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
              {currentStep + 1}
            </div>
            {steps[currentStep].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {steps[currentStep].questions.map((question, questionIndex) => (
            <div key={questionIndex} className="space-y-3">
              <Label className="text-sm font-medium text-gray-900">
                {question.question}
                {question.required && <span className="text-red-500 ml-1">*</span>}
              </Label>
              
              {question.type === 'text' && (
                <Input
                  value={getQuestionValue(currentStep, questionIndex) || ''}
                  onChange={(e) => updateAnswer(currentStep, questionIndex, e.target.value)}
                  placeholder={question.placeholder}
                  className={errors[`${currentStep}-${questionIndex}`] ? 'border-red-500' : ''}
                />
              )}

              {question.type === 'textarea' && (
                <Textarea
                  value={getQuestionValue(currentStep, questionIndex) || ''}
                  onChange={(e) => updateAnswer(currentStep, questionIndex, e.target.value)}
                  placeholder={question.placeholder}
                  rows={3}
                  className={errors[`${currentStep}-${questionIndex}`] ? 'border-red-500' : ''}
                />
              )}

              {question.type === 'select' && (
                <Select
                  value={getQuestionValue(currentStep, questionIndex) || ''}
                  onValueChange={(value) => updateAnswer(currentStep, questionIndex, value)}
                >
                  <SelectTrigger className={errors[`${currentStep}-${questionIndex}`] ? 'border-red-500' : ''}>
                    <SelectValue placeholder={question.placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {question.options?.map((option, optionIndex) => (
                      <SelectItem key={optionIndex} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {question.type === 'checkbox' && (
                <div className="space-y-2">
                  {question.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <Checkbox
                        id={`${currentStep}-${questionIndex}-${optionIndex}`}
                        checked={Array.isArray(getQuestionValue(currentStep, questionIndex)) && 
                                getQuestionValue(currentStep, questionIndex).includes(option)}
                        onCheckedChange={(checked) => {
                          const currentValues = getQuestionValue(currentStep, questionIndex) || [];
                          const newValues = checked
                            ? [...currentValues, option]
                            : currentValues.filter((v: string) => v !== option);
                          updateAnswer(currentStep, questionIndex, newValues);
                        }}
                      />
                      <Label 
                        htmlFor={`${currentStep}-${questionIndex}-${optionIndex}`}
                        className="text-sm font-normal"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              {question.type === 'radio' && (
                <RadioGroup
                  value={getQuestionValue(currentStep, questionIndex) || ''}
                  onValueChange={(value) => updateAnswer(currentStep, questionIndex, value)}
                  className="space-y-2"
                >
                  {question.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center space-x-2">
                      <RadioGroupItem value={option} id={`${currentStep}-${questionIndex}-${optionIndex}`} />
                      <Label 
                        htmlFor={`${currentStep}-${questionIndex}-${optionIndex}`}
                        className="text-sm font-normal"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}

              {errors[`${currentStep}-${questionIndex}`] && (
                <p className="text-red-500 text-sm">{errors[`${currentStep}-${questionIndex}`]}</p>
              )}
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        {currentStep === steps.length - 1 ? (
          <Button onClick={handleSubmit} className="bg-nolands-primary hover:bg-blue-700 flex items-center gap-2">
            Submit Tax Health Check
          </Button>
        ) : (
          <Button onClick={handleNext} className="bg-nolands-primary hover:bg-blue-700 flex items-center gap-2">
            Next
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default TaxHealthCheckForm;
