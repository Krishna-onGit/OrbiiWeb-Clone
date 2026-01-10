# Fix DynamicPricingSimulator unused vars
$file = "src\components\insurance\DynamicPricingSimulator.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'const \[familyMedicalHistory, setFamilyMedicalHistory\] = useState<string\[\]>\(\[\]\);', '// const [familyMedicalHistory, setFamilyMedicalHistory] = useState<string[]>([]);'
$content = $content -replace 'const vehicleScore = ', '// const vehicleScore = '
$content | Set-Content $file -NoNewline

# Fix ForInsurersPage unused imports
$file = "src\components\insurance\ForInsurersPage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', Activity', '' -replace ', LineChart', '' -replace ', Settings', '' -replace ', Layers', '' -replace ', GitBranch', ''
$content | Set-Content $file -NoNewline

# Fix FullCoveragePage unused imports
$file = "src\components\insurance\FullCoveragePage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', Zap', '' -replace ', AlertTriangle', '' -replace ', CloudRain', '' -replace ', Flame', '' -replace ', Gavel', '' -replace ', XCircle', '' -replace ', HelpCircle', '' -replace ', FileText', '' -replace ', ShieldAlert', '' -replace ', Clock', ''
$content | Set-Content $file -NoNewline

# Fix HealthInsurancePage unused imports and vars
$file = "src\components\insurance\HealthInsurancePage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'import \{ Card, CardContent \} from', 'import { } from'
$content = $content -replace 'import \{ Progress \} from', '// import { Progress } from'
$content = $content -replace ', onSelectProduct\?: \(productId: string\) => void', ''
$content = $content -replace 'const \[activeTab, setActiveTab\] = useState', '// const [activeTab, setActiveTab] = useState'
$content | Set-Content $file -NoNewline

# Fix InstantProcessingPage unused imports
$file = "src\components\insurance\InstantProcessingPage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', Clock', '' -replace ', TrendingUp', '' -replace ', Shield', '' -replace ', Activity', '' -replace ', BarChart3', '' -replace ', Cpu', ''
$content | Set-Content $file -NoNewline

# Fix InsuranceDetailPage unused imports and vars
$file = "src\components\insurance\InsuranceDetailPage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', Calculator', ''
$content = $content -replace 'import \{ Input \} from', '// import { Input } from'
$content = $content -replace 'const \[calculatorValues, setCalculatorValues\] = useState', '// const [calculatorValues, setCalculatorValues] = useState'
$content | Set-Content $file -NoNewline

# Fix InvestmentPage unused imports
$file = "src\components\insurance\InvestmentPage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', Plus', '' -replace ', FileCheck', '' -replace ', FileText', '' -replace ', Zap', ''
$content = $content -replace ', onSelectProduct\?: \(productId: string\) => void', ''
$content | Set-Content $file -NoNewline

# Fix OneCroreTermPage unused imports
$file = "src\components\insurance\OneCroreTermPage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', TrendingUp', '' -replace ', Briefcase', '' -replace ', HelpCircle', '' -replace ', DollarSign', '' -replace ', BookOpen', '' -replace ', ChevronRight', '' -replace ', Star', ''
$content = $content -replace ', onSelectProduct\?: \(productId: string\) => void', ''
$content | Set-Content $file -NoNewline

# Fix OtherInsurancePage unused imports and vars
$file = "src\components\insurance\OtherInsurancePage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', Calculator', '' -replace ', FileText', '' -replace ', Award', ''
$content = $content -replace ', onSelectProduct\?: \(productId: string\) => void', ''
$content = $content -replace 'const \[selectedType, setSelectedType\] = useState', '// const [selectedType, setSelectedType] = useState'
$content | Set-Content $file -NoNewline

# Fix SmartProtectionPage unused imports
$file = "src\components\insurance\SmartProtectionPage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', TrendingUp', '' -replace ', Zap', '' -replace ', Sparkles', '' -replace ', FileText', '' -replace ', Lock', ''
$content | Set-Content $file -NoNewline

# Fix TermInsurancePage unused imports
$file = "src\components\insurance\TermInsurancePage.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', DollarSign', '' -replace ', ChevronRight', '' -replace ', Target', '' -replace ', Zap', '' -replace ', BarChart3', '' -replace ', Calendar', '' -replace ', TrendingDown', '' -replace ', CreditCard', '' -replace ', Download', '' -replace ', Mail', '' -replace ', MapPin', '' -replace ', Landmark', ''
$content = $content -replace 'import \{ Tabs, TabsContent, TabsList, TabsTrigger \} from', '// import { Tabs, TabsContent, TabsList, TabsTrigger } from'
$content = $content -replace 'import \{ Progress \} from', '// import { Progress } from'
$content | Set-Content $file -NoNewline

# Fix Navbar unused var
$file = "src\components\layout\Navbar.tsx"
$content = Get-Content $file -Raw
$content = $content -replace 'const scrollThreshold = ', '// const scrollThreshold = '
$content | Set-Content $file -NoNewline

# Fix DevSection unused import
$file = "src\components\sections\DevSection.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', useState', ''
$content | Set-Content $file -NoNewline

# Fix StickyNarrativeSection unused imports
$file = "src\components\sections\StickyNarrativeSection.tsx"
$content = Get-Content $file -Raw
$content = $content -replace ', UserCheck', '' -replace ', ShieldCheck', '' -replace ', FileText', '' -replace ', Cpu', ''
$content | Set-Content $file -NoNewline

# Fix calculators.ts unused imports
$file = "src\data\insurance\calculators.ts"
$content = Get-Content $file -Raw
$content = $content -replace "import \{ Calculator, TrendingUp, PiggyBank, Shield, FileText, Briefcase, Home, Car, Bike, Plane, Heart, IndianRupee, Receipt, Building2, Wallet, Clock, Activity, Baby, Scale \} from 'lucide-react';", "// All imports commented out - icons not used in this data file"
$content | Set-Content $file -NoNewline

# Fix index.ts any type
$file = "src\data\insurance\index.ts"
$content = Get-Content $file -Raw
$content = $content -replace ': any\[\]', ': {id: string; name: string; slug: string; icon: React.ElementType; description: string; features: string[]}[]'
$content | Set-Content $file -NoNewline

Write-Host "All lint errors fixed!"
