import { Upload, Users, Heart, Car, Briefcase, Home, MapPin, DollarSign, FileText, Phone, Mail, User, Calendar, Activity, Gauge, Shield, Clock, Sun, Moon, Navigation, Building, Wrench, Package, Award } from 'lucide-react';
import { Slider } from './ui/slider';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import InteractiveButton from './InteractiveButton';
import AnimatedCard from './animations/AnimatedCard';
import AnimatedSection from './animations/AnimatedSection';
import AnimatedInput from './animations/AnimatedInput';
import FloatingIcon from './animations/FloatingIcon';
import GlowingBadge from './animations/GlowingBadge';
import AnimatedUpload from './animations/AnimatedUpload';
import { motion } from 'motion/react';
import { fadeInUp, staggerContainer } from './animations/AnimationVariants';

interface InputFormProps {
  // Personal
  age: number;
  setAge: (val: number) => void;
  gender: string;
  setGender: (val: string) => void;
  occupation: string;
  setOccupation: (val: string) => void;
  maritalStatus: string;
  setMaritalStatus: (val: string) => void;
  dependents: number;
  setDependents: (val: number) => void;
  yearsLicensed: number;
  setYearsLicensed: (val: number) => void;
  educationLevel: string;
  setEducationLevel: (val: string) => void;
  
  // Health
  weight: number;
  setWeight: (val: number) => void;
  height: number;
  setHeight: (val: number) => void;
  exerciseFrequency: number;
  setExerciseFrequency: (val: number) => void;
  smokingStatus: string;
  setSmokingStatus: (val: string) => void;
  chronicConditions: number;
  setChronicConditions: (val: number) => void;
  bloodPressure: string;
  setBloodPressure: (val: string) => void;
  restingHeartRate: number;
  setRestingHeartRate: (val: number) => void;
  cholesterolLevel: string;
  setCholesterolLevel: (val: string) => void;
  diabetesStatus: string;
  setDiabetesStatus: (val: string) => void;
  alcoholConsumption: string;
  setAlcoholConsumption: (val: string) => void;
  lastCheckupMonths: number;
  setLastCheckupMonths: (val: number) => void;
  currentMedications: number;
  setCurrentMedications: (val: number) => void;
  mentalHealthStatus: string;
  setMentalHealthStatus: (val: string) => void;
  sleepHoursPerNight: number;
  setSleepHoursPerNight: (val: number) => void;
  
  // Vehicle
  vehicleAge: number;
  setVehicleAge: (val: number) => void;
  vehicleMake: string;
  setVehicleMake: (val: string) => void;
  vehicleModel: string;
  setVehicleModel: (val: string) => void;
  vehicleValue: number;
  setVehicleValue: (val: number) => void;
  engineCC: number;
  setEngineCC: (val: number) => void;
  fuelType: string;
  setFuelType: (val: string) => void;
  hasABS: boolean;
  setHasABS: (val: boolean) => void;
  hasAirbags: number;
  setHasAirbags: (val: number) => void;
  parkingSituation: string;
  setParkingSituation: (val: string) => void;
  annualMaintenance: string;
  setAnnualMaintenance: (val: string) => void;
  modificationsPresent: boolean;
  setModificationsPresent: (val: boolean) => void;
  
  // Driving
  hardBrakingEvents: number;
  setHardBrakingEvents: (val: number) => void;
  speedingIncidents: number;
  setSpeedingIncidents: (val: number) => void;
  nightDrivingHours: number;
  setNightDrivingHours: (val: number) => void;
  highwayRatio: number;
  setHighwayRatio: (val: number) => void;
  drivingExperience: number;
  setDrivingExperience: (val: number) => void;
  trafficViolations: number;
  setTrafficViolations: (val: number) => void;
  accidentsAtFault: number;
  setAccidentsAtFault: (val: number) => void;
  defensiveDrivingCourse: boolean;
  setDefensiveDrivingCourse: (val: boolean) => void;
  peakHourDriving: number;
  setPeakHourDriving: (val: number) => void;
  cityDriving: number;
  setCityDriving: (val: number) => void;
  avgTripDuration: number;
  setAvgTripDuration: (val: number) => void;
  weekdayDriving: number;
  setWeekdayDriving: (val: number) => void;
  longDistanceTrips: number;
  setLongDistanceTrips: (val: number) => void;
  
  // Commute
  dailyCommute: number;
  setDailyCommute: (val: number) => void;
  weekendDriving: number;
  setWeekendDriving: (val: number) => void;
  businessTravel: number;
  setBusinessTravel: (val: number) => void;
  commuteDistance: number;
  setCommuteDistance: (val: number) => void;
  commuteTime: number;
  setCommuteTime: (val: number) => void;
  commuteStartTime: string;
  setCommuteStartTime: (val: string) => void;
  commuteReturnTime: string;
  setCommuteReturnTime: (val: string) => void;
  parkingAtWork: string;
  setParkingAtWork: (val: string) => void;
  alternateTransport: boolean;
  setAlternateTransport: (val: boolean) => void;
  carpoolFrequency: string;
  setCarpoolFrequency: (val: string) => void;
  
  // Location
  areaType: string;
  setAreaType: (val: string) => void;
  crimeRate: string;
  setCrimeRate: (val: string) => void;
  disasterZone: string;
  setDisasterZone: (val: string) => void;
  pincode: string;
  setPincode: (val: string) => void;
  floodZone: boolean;
  setFloodZone: (val: boolean) => void;
  earthquakeZone: string;
  setEarthquakeZone: (val: string) => void;
  nearestHospitalKm: number;
  setNearestHospitalKm: (val: number) => void;
  nearestPoliceStationKm: number;
  setNearestPoliceStationKm: (val: number) => void;
  gatedCommunity: boolean;
  setGatedCommunity: (val: boolean) => void;
  cctvCoverage: boolean;
  setCctvCoverage: (val: boolean) => void;
  
  // Financial
  annualIncome: number;
  setAnnualIncome: (val: number) => void;
  creditScore: number;
  setCreditScore: (val: number) => void;
  homeOwnership: string;
  setHomeOwnership: (val: string) => void;
  previousInsurer: string;
  setPreviousInsurer: (val: string) => void;
  yearsWithPreviousInsurer: number;
  setYearsWithPreviousInsurer: (val: number) => void;
  noClaimBonus: number;
  setNoClaimBonus: (val: number) => void;
  
  // Claims
  claimHistory: number;
  setClaimHistory: (val: number) => void;
  lastClaimAmount: number;
  setLastClaimAmount: (val: number) => void;
  lastClaimDate: string;
  setLastClaimDate: (val: string) => void;
  claimType: string;
  setClaimType: (val: string) => void;
  
  // Files
  medicalReportFile: any;
  setMedicalReportFile: (val: any) => void;
  drivingLicenseFile: any;
  setDrivingLicenseFile: (val: any) => void;
  vehicleRCFile: any;
  setVehicleRCFile: (val: any) => void;
  previousPolicyFile: any;
  setPreviousPolicyFile: (val: any) => void;
  fitnessReportFile: any;
  setFitnessReportFile: (val: any) => void;
  pollutionCertFile: any;
  setPollutionCertFile: (val: any) => void;
  aadhaarCardFile: any;
  setAadhaarCardFile: (val: any) => void;
  panCardFile: any;
  setPanCardFile: (val: any) => void;
  existingPolicyFile: any;
  setExistingPolicyFile: (val: any) => void;
  
  // Scores
  healthScore: number;
  drivingScore: number;
  monthlyMileage: number;
  locationRisk: number;
}

export default function DynamicPricingInputForm(props: InputFormProps) {
  const handleFileUpload = (setter: (val: any) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0].name);
    }
  };
  
  const bmi = props.weight / Math.pow(props.height / 100, 2);

  return (
    <div className="space-y-8">
      {/* Personal Demographics */}
      <AnimatedCard delay={0}>
        <Card className="p-8 glass-card border border-white/20 bg-white/5">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3} delay={0}>
              <User className="w-6 h-6 text-purple-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Personal Demographics
            </motion.h3>
          </div>
        
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatedInput delay={0}>
              <div>
                <label className="block text-white mb-3">Age: {props.age} years</label>
                <Slider 
                  value={[props.age]} 
                  onValueChange={(val) => props.setAge(val[0])}
                  min={18}
                  max={75}
                  step={1}
                  dir="ltr"
                />
              </div>
            </AnimatedInput>
          
            <AnimatedInput delay={0.1}>
              <div>
                <label className="block text-white mb-3">Years with Driving License: {props.yearsLicensed}</label>
                <Slider 
                  value={[props.yearsLicensed]} 
                  onValueChange={(val) => props.setYearsLicensed(val[0])}
                  min={0}
                  max={50}
                  step={1}
                  dir="ltr"
                />
              </div>
            </AnimatedInput>
          
            <AnimatedInput delay={0.2}>
              <div>
                <label className="block text-white mb-3">Number of Dependents: {props.dependents}</label>
                <Slider 
                  value={[props.dependents]} 
                  onValueChange={(val) => props.setDependents(val[0])}
                  min={0}
                  max={10}
                  step={1}
                  dir="ltr"
                />
              </div>
            </AnimatedInput>
          
            <AnimatedInput delay={0.3}>
              <div>
                <label className="block text-white mb-3">Gender</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.gender === 'male'}
                    onClick={() => props.setGender('male')}
                    color="purple"
                    size="md"
                  >
                    Male
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.gender === 'female'}
                    onClick={() => props.setGender('female')}
                    color="purple"
                    size="md"
                  >
                    Female
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.gender === 'other'}
                    onClick={() => props.setGender('other')}
                    color="purple"
                    size="md"
                  >
                    Other
                  </InteractiveButton>
                </div>
              </div>
            </AnimatedInput>
          
            <AnimatedInput delay={0.4}>
              <div>
                <label className="block text-white mb-3">Marital Status</label>
                <div className="flex gap-3 flex-wrap">
                  {['single', 'married', 'divorced', 'widowed'].map(status => (
                    <InteractiveButton 
                      key={status}
                      isActive={props.maritalStatus === status}
                      onClick={() => props.setMaritalStatus(status)}
                      color="purple"
                      size="md"
                    >
                      {status.charAt(0).toUpperCase() + status.slice(1)}
                    </InteractiveButton>
                  ))}
                </div>
              </div>
            </AnimatedInput>
          
            <AnimatedInput delay={0.5}>
              <div>
                <label className="block text-white mb-3">Occupation</label>
                <div className="flex gap-3 flex-wrap">
                  {['professional', 'skilled', 'business', 'student', 'retired'].map(occ => (
                    <InteractiveButton 
                      key={occ}
                      isActive={props.occupation === occ}
                      onClick={() => props.setOccupation(occ)}
                      color="purple"
                      size="md"
                    >
                      {occ.charAt(0).toUpperCase() + occ.slice(1)}
                    </InteractiveButton>
                  ))}
                </div>
              </div>
            </AnimatedInput>
          
            <AnimatedInput delay={0.6}>
              <div>
                <label className="block text-white mb-3">Education Level</label>
                <div className="flex gap-3 flex-wrap">
                  {['high-school', 'graduate', 'post-graduate'].map(edu => (
                    <InteractiveButton 
                      key={edu}
                      isActive={props.educationLevel === edu}
                      onClick={() => props.setEducationLevel(edu)}
                      color="purple"
                      size="md"
                    >
                      {edu.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </InteractiveButton>
                  ))}
                </div>
              </div>
            </AnimatedInput>
          </div>
        </AnimatedSection>
        </Card>
      </AnimatedCard>

      {/* Comprehensive Health Assessment */}
      <AnimatedCard delay={0.1}>
        <Card className="p-8 glass-card-strong border border-white/20 bg-[rgb(34,34,34)]">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3.5} delay={0.3}>
              <Heart className="w-6 h-6 text-red-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Comprehensive Health Assessment
            </motion.h3>
          </div>
        
        <div className="space-y-6">
          {/* Physical Metrics */}
          <div>
            <h4 className="text-lg text-white/90 mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Physical Metrics
            </h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Weight: {props.weight} kg</label>
                <Slider 
                  value={[props.weight]} 
                  onValueChange={(val) => props.setWeight(val[0])}
                  min={40}
                  max={150}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Height: {props.height} cm</label>
                <Slider 
                  value={[props.height]} 
                  onValueChange={(val) => props.setHeight(val[0])}
                  min={140}
                  max={210}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">
                  BMI: {bmi.toFixed(1)} 
                  <span className="ml-2 text-sm">
                    {bmi < 18.5 ? '(Underweight)' : bmi < 25 ? '(Normal)' : bmi < 30 ? '(Overweight)' : '(Obese)'}
                  </span>
                </label>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${bmi < 18.5 || bmi >= 30 ? 'bg-red-500' : bmi >= 25 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${Math.min(100, (bmi / 40) * 100)}%` }}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Resting Heart Rate: {props.restingHeartRate} bpm</label>
                <Slider 
                  value={[props.restingHeartRate]} 
                  onValueChange={(val) => props.setRestingHeartRate(val[0])}
                  min={40}
                  max={120}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Sleep Hours/Night: {props.sleepHoursPerNight}</label>
                <Slider 
                  value={[props.sleepHoursPerNight]} 
                  onValueChange={(val) => props.setSleepHoursPerNight(val[0])}
                  min={3}
                  max={12}
                  step={0.5}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Exercise Days/Week: {props.exerciseFrequency}</label>
                <Slider 
                  value={[props.exerciseFrequency]} 
                  onValueChange={(val) => props.setExerciseFrequency(val[0])}
                  min={0}
                  max={7}
                  step={1}
                  dir="ltr"
                />
              </div>
            </div>
          </div>

          {/* Medical Conditions */}
          <div>
            <h4 className="text-lg text-white/90 mb-4">Medical Conditions & Lifestyle</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Blood Pressure</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.bloodPressure === 'normal'}
                    onClick={() => props.setBloodPressure('normal')}
                    color="green"
                    size="md"
                  >
                    Normal
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.bloodPressure === 'elevated'}
                    onClick={() => props.setBloodPressure('elevated')}
                    color="yellow"
                    size="md"
                  >
                    Elevated
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.bloodPressure === 'high'}
                    onClick={() => props.setBloodPressure('high')}
                    color="red"
                    size="md"
                  >
                    High
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Cholesterol Level</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.cholesterolLevel === 'normal'}
                    onClick={() => props.setCholesterolLevel('normal')}
                    color="green"
                    size="md"
                  >
                    Normal
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.cholesterolLevel === 'borderline'}
                    onClick={() => props.setCholesterolLevel('borderline')}
                    color="yellow"
                    size="md"
                  >
                    Borderline
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.cholesterolLevel === 'high'}
                    onClick={() => props.setCholesterolLevel('high')}
                    color="red"
                    size="md"
                  >
                    High
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Diabetes Status</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.diabetesStatus === 'none'}
                    onClick={() => props.setDiabetesStatus('none')}
                    color="green"
                    size="md"
                  >
                    None
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.diabetesStatus === 'pre-diabetic'}
                    onClick={() => props.setDiabetesStatus('pre-diabetic')}
                    color="yellow"
                    size="md"
                  >
                    Pre-diabetic
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.diabetesStatus === 'type1'}
                    onClick={() => props.setDiabetesStatus('type1')}
                    color="red"
                    size="md"
                  >
                    TYPE1
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.diabetesStatus === 'type2'}
                    onClick={() => props.setDiabetesStatus('type2')}
                    color="red"
                    size="md"
                  >
                    TYPE2
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Smoking Status</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.smokingStatus === 'non-smoker'}
                    onClick={() => props.setSmokingStatus('non-smoker')}
                    color="green"
                    size="md"
                  >
                    Non Smoker
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.smokingStatus === 'occasional'}
                    onClick={() => props.setSmokingStatus('occasional')}
                    color="yellow"
                    size="md"
                  >
                    Occasional
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.smokingStatus === 'regular'}
                    onClick={() => props.setSmokingStatus('regular')}
                    color="red"
                    size="md"
                  >
                    Regular
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Alcohol Consumption</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.alcoholConsumption === 'none'}
                    onClick={() => props.setAlcoholConsumption('none')}
                    color="green"
                    size="md"
                  >
                    None
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.alcoholConsumption === 'light'}
                    onClick={() => props.setAlcoholConsumption('light')}
                    color="green"
                    size="md"
                  >
                    Light
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.alcoholConsumption === 'moderate'}
                    onClick={() => props.setAlcoholConsumption('moderate')}
                    color="yellow"
                    size="md"
                  >
                    Moderate
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.alcoholConsumption === 'heavy'}
                    onClick={() => props.setAlcoholConsumption('heavy')}
                    color="red"
                    size="md"
                  >
                    Heavy
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Mental Health Status</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.mentalHealthStatus === 'excellent'}
                    onClick={() => props.setMentalHealthStatus('excellent')}
                    color="green"
                    size="md"
                  >
                    Excellent
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.mentalHealthStatus === 'good'}
                    onClick={() => props.setMentalHealthStatus('good')}
                    color="green"
                    size="md"
                  >
                    Good
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.mentalHealthStatus === 'fair'}
                    onClick={() => props.setMentalHealthStatus('fair')}
                    color="yellow"
                    size="md"
                  >
                    Fair
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.mentalHealthStatus === 'poor'}
                    onClick={() => props.setMentalHealthStatus('poor')}
                    color="red"
                    size="md"
                  >
                    Poor
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Chronic Conditions: {props.chronicConditions}</label>
                <Slider 
                  value={[props.chronicConditions]} 
                  onValueChange={(val) => props.setChronicConditions(val[0])}
                  min={0}
                  max={5}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Current Medications: {props.currentMedications}</label>
                <Slider 
                  value={[props.currentMedications]} 
                  onValueChange={(val) => props.setCurrentMedications(val[0])}
                  min={0}
                  max={10}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Last Health Checkup: {props.lastCheckupMonths} months ago</label>
                <Slider 
                  value={[props.lastCheckupMonths]} 
                  onValueChange={(val) => props.setLastCheckupMonths(val[0])}
                  min={0}
                  max={36}
                  step={1}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
          
          {/* Medical Reports Upload */}
          <div>
            <h4 className="text-lg text-white/90 mb-4 flex items-center gap-2">
              <Upload className="w-5 h-5" />
              Medical Documents (Optional)
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <label className="block text-white/80 mb-2 text-sm">Recent Health Report</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setMedicalReportFile)}
                    className="hidden"
                    id="medical-report"
                  />
                  <label 
                    htmlFor="medical-report"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.medicalReportFile || 'Upload PDF/Image'}</span>
                  </label>
                </div>
              </div>
              
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <label className="block text-white/80 mb-2 text-sm">Fitness Certificate</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setFitnessReportFile)}
                    className="hidden"
                    id="fitness-report"
                  />
                  <label 
                    htmlFor="fitness-report"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.fitnessReportFile || 'Upload PDF/Image'}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <GlowingBadge 
            glowColor="rgba(59, 130, 246, 0.5)" 
            className="mt-6 p-4 glass-card border border-blue-500/30 rounded-xl"
          >
            <div className="flex items-center gap-2 text-blue-400">
              <Activity className="w-5 h-5" />
              <motion.span
                key={props.healthScore}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Calculated Health Score: {props.healthScore}/100
              </motion.span>
            </div>
          </GlowingBadge>
        </div>
        </Card>
      </AnimatedCard>

      {/* Vehicle Details */}
      <AnimatedCard delay={0.2}>
        <Card className="p-8 glass-card-strong border border-white/20 bg-[rgb(34,34,34)]">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3.2} delay={0.5}>
              <Car className="w-6 h-6 text-blue-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Vehicle Details
            </motion.h3>
          </div>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <label className="block text-white/90 mb-3">Vehicle Make</label>
              <Input 
                type="text"
                value={props.vehicleMake}
                onChange={(e) => props.setVehicleMake(e.target.value)}
                placeholder="e.g., Honda, Maruti, Hyundai"
                className="glass-card border-white/20 text-white"
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Vehicle Model</label>
              <Input 
                type="text"
                value={props.vehicleModel}
                onChange={(e) => props.setVehicleModel(e.target.value)}
                placeholder="e.g., City, Swift, Creta"
                className="glass-card border-white/20 text-white"
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Vehicle Age: {props.vehicleAge} years</label>
              <Slider 
                value={[props.vehicleAge]} 
                onValueChange={(val) => props.setVehicleAge(val[0])}
                min={0}
                max={20}
                step={1}
                dir="ltr"
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Vehicle Value: ₹{(props.vehicleValue / 100000).toFixed(1)}L</label>
              <Slider 
                value={[props.vehicleValue]} 
                onValueChange={(val) => props.setVehicleValue(val[0])}
                min={100000}
                max={5000000}
                step={50000}
                dir="ltr"
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Engine Capacity: {props.engineCC} CC</label>
              <Slider 
                value={[props.engineCC]} 
                onValueChange={(val) => props.setEngineCC(val[0])}
                min={800}
                max={3000}
                step={100}
                dir="ltr"
              />
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Number of Airbags: {props.hasAirbags}</label>
              <Slider 
                value={[props.hasAirbags]} 
                onValueChange={(val) => props.setHasAirbags(val[0])}
                min={0}
                max={8}
                step={1}
                dir="ltr"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/90 mb-3">Fuel Type</label>
              <div className="flex gap-3 flex-wrap">
                <InteractiveButton 
                  isActive={props.fuelType === 'petrol'}
                  onClick={() => props.setFuelType('petrol')}
                  color="orange"
                  size="md"
                >
                  Petrol
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.fuelType === 'diesel'}
                  onClick={() => props.setFuelType('diesel')}
                  color="orange"
                  size="md"
                >
                  Diesel
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.fuelType === 'cng'}
                  onClick={() => props.setFuelType('cng')}
                  color="blue"
                  size="md"
                >
                  CNG
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.fuelType === 'electric'}
                  onClick={() => props.setFuelType('electric')}
                  color="green"
                  size="md"
                >
                  Electric
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.fuelType === 'hybrid'}
                  onClick={() => props.setFuelType('hybrid')}
                  color="green"
                  size="md"
                >
                  Hybrid
                </InteractiveButton>
              </div>
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Parking Situation</label>
              <div className="flex gap-3 flex-wrap">
                <InteractiveButton 
                  isActive={props.parkingSituation === 'covered'}
                  onClick={() => props.setParkingSituation('covered')}
                  color="green"
                  size="md"
                >
                  Covered
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.parkingSituation === 'open'}
                  onClick={() => props.setParkingSituation('open')}
                  color="yellow"
                  size="md"
                >
                  Open
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.parkingSituation === 'street'}
                  onClick={() => props.setParkingSituation('street')}
                  color="red"
                  size="md"
                >
                  Street
                </InteractiveButton>
              </div>
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Annual Maintenance</label>
              <div className="flex gap-3 flex-wrap">
                <InteractiveButton 
                  isActive={props.annualMaintenance === 'poor'}
                  onClick={() => props.setAnnualMaintenance('poor')}
                  color="red"
                  size="md"
                >
                  Poor
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.annualMaintenance === 'fair'}
                  onClick={() => props.setAnnualMaintenance('fair')}
                  color="yellow"
                  size="md"
                >
                  Fair
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.annualMaintenance === 'regular'}
                  onClick={() => props.setAnnualMaintenance('regular')}
                  color="green"
                  size="md"
                >
                  Regular
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.annualMaintenance === 'excellent'}
                  onClick={() => props.setAnnualMaintenance('excellent')}
                  color="green"
                  size="md"
                >
                  Excellent
                </InteractiveButton>
              </div>
            </div>
            
            <div>
              <label className="block text-white/90 mb-3">Safety Features</label>
              <div className="flex gap-4">
                <InteractiveButton 
                  isActive={props.hasABS}
                  onClick={() => props.setHasABS(!props.hasABS)}
                  color="green"
                  size="md"
                >
                  {props.hasABS ? '✓' : '✗'} ABS
                </InteractiveButton>
                <InteractiveButton 
                  isActive={props.modificationsPresent}
                  onClick={() => props.setModificationsPresent(!props.modificationsPresent)}
                  color="yellow"
                  size="md"
                >
                  {props.modificationsPresent ? '✓' : '✗'} Modifications
                </InteractiveButton>
              </div>
            </div>
          </div>
          
          {/* Vehicle Documents */}
          <div>
            <h4 className="text-lg text-white/90 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Vehicle Documents
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <label className="block text-white/80 mb-2 text-sm">Registration Certificate (RC)</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setVehicleRCFile)}
                    className="hidden"
                    id="vehicle-rc"
                  />
                  <label 
                    htmlFor="vehicle-rc"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.vehicleRCFile || 'Upload RC'}</span>
                  </label>
                </div>
              </div>
              
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <label className="block text-white/80 mb-2 text-sm">Driving License</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setDrivingLicenseFile)}
                    className="hidden"
                    id="driving-license"
                  />
                  <label 
                    htmlFor="driving-license"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.drivingLicenseFile || 'Upload License'}</span>
                  </label>
                </div>
              </div>
              
              <div className="glass-card p-4 border border-white/10 rounded-lg">
                <label className="block text-white/80 mb-2 text-sm">Pollution Certificate</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setPollutionCertFile)}
                    className="hidden"
                    id="pollution-cert"
                  />
                  <label 
                    htmlFor="pollution-cert"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.pollutionCertFile || 'Upload Certificate'}</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          {/* Identity & Policy Documents */}
          <motion.div 
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h4 className="text-lg text-white/90 mb-4 flex items-center gap-2">
              <FloatingIcon duration={2.5} delay={1}>
                <FileText className="w-5 h-5" />
              </FloatingIcon>
              Identity & Policy Documents
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <AnimatedUpload delay={0.1}>
                <div className="glass-card p-4 border border-white/10 rounded-lg">
                <label className="block text-white/80 mb-2 text-sm">Aadhaar Card</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setAadhaarCardFile)}
                    className="hidden"
                    id="aadhaar-card"
                  />
                  <label 
                    htmlFor="aadhaar-card"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.aadhaarCardFile || 'Upload Aadhaar'}</span>
                  </label>
                </div>
                </div>
              </AnimatedUpload>
              
              <AnimatedUpload delay={0.2}>
                <div className="glass-card p-4 border border-white/10 rounded-lg">
                  <label className="block text-white/80 mb-2 text-sm">PAN Card</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setPanCardFile)}
                    className="hidden"
                    id="pan-card"
                  />
                  <label 
                    htmlFor="pan-card"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.panCardFile || 'Upload PAN'}</span>
                  </label>
                </div>
                </div>
              </AnimatedUpload>
              
              <AnimatedUpload delay={0.3}>
                <div className="glass-card p-4 border border-white/10 rounded-lg">
                  <label className="block text-white/80 mb-2 text-sm">Existing Policy (if any)</label>
                <div className="relative">
                  <input 
                    type="file" 
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileUpload(props.setExistingPolicyFile)}
                    className="hidden"
                    id="existing-policy"
                  />
                  <label 
                    htmlFor="existing-policy"
                    className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                  >
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">{props.existingPolicyFile || 'Upload Policy'}</span>
                  </label>
                </div>
                </div>
              </AnimatedUpload>
            </div>
          </motion.div>
        </div>
        </Card>
      </AnimatedCard>

      {/* Detailed Driving Behavior */}
      <AnimatedCard delay={0.3}>
        <Card className="p-8 glass-card-strong border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3.7} delay={0.6}>
              <Gauge className="w-6 h-6 text-green-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Detailed Driving Behavior & Patterns
            </motion.h3>
          </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg text-white/90 mb-4">Driving Experience & History</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Driving Experience: {props.drivingExperience} years</label>
                <Slider 
                  value={[props.drivingExperience]} 
                  onValueChange={(val) => props.setDrivingExperience(val[0])}
                  min={0}
                  max={50}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Traffic Violations (3 years): {props.trafficViolations}</label>
                <Slider 
                  value={[props.trafficViolations]} 
                  onValueChange={(val) => props.setTrafficViolations(val[0])}
                  min={0}
                  max={10}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">At-Fault Accidents (3 years): {props.accidentsAtFault}</label>
                <Slider 
                  value={[props.accidentsAtFault]} 
                  onValueChange={(val) => props.setAccidentsAtFault(val[0])}
                  min={0}
                  max={5}
                  step={1}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Driving Behavior Metrics</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Hard Braking Events/Month: {props.hardBrakingEvents}</label>
                <Slider 
                  value={[props.hardBrakingEvents]} 
                  onValueChange={(val) => props.setHardBrakingEvents(val[0])}
                  min={0}
                  max={30}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Speeding Incidents/Month: {props.speedingIncidents}</label>
                <Slider 
                  value={[props.speedingIncidents]} 
                  onValueChange={(val) => props.setSpeedingIncidents(val[0])}
                  min={0}
                  max={20}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Avg Trip Duration: {props.avgTripDuration} mins</label>
                <Slider 
                  value={[props.avgTripDuration]} 
                  onValueChange={(val) => props.setAvgTripDuration(val[0])}
                  min={10}
                  max={180}
                  step={5}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Driving Patterns & Conditions</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">City Driving: {props.cityDriving}%</label>
                <Slider 
                  value={[props.cityDriving]} 
                  onValueChange={(val) => props.setCityDriving(val[0])}
                  min={0}
                  max={100}
                  step={10}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Highway Driving: {props.highwayRatio}%</label>
                <Slider 
                  value={[props.highwayRatio]} 
                  onValueChange={(val) => props.setHighwayRatio(val[0])}
                  min={0}
                  max={100}
                  step={10}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Peak Hour Driving: {props.peakHourDriving}%</label>
                <Slider 
                  value={[props.peakHourDriving]} 
                  onValueChange={(val) => props.setPeakHourDriving(val[0])}
                  min={0}
                  max={100}
                  step={10}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Night Driving Hours/Month: {props.nightDrivingHours}</label>
                <Slider 
                  value={[props.nightDrivingHours]} 
                  onValueChange={(val) => props.setNightDrivingHours(val[0])}
                  min={0}
                  max={80}
                  step={5}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Weekday Driving: {props.weekdayDriving} days/week</label>
                <Slider 
                  value={[props.weekdayDriving]} 
                  onValueChange={(val) => props.setWeekdayDriving(val[0])}
                  min={0}
                  max={7}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Long Distance Trips/Month: {props.longDistanceTrips}</label>
                <Slider 
                  value={[props.longDistanceTrips]} 
                  onValueChange={(val) => props.setLongDistanceTrips(val[0])}
                  min={0}
                  max={10}
                  step={1}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-white/90 mb-3">Defensive Driving Course</label>
            <InteractiveButton 
              isActive={props.defensiveDrivingCourse}
              onClick={() => props.setDefensiveDrivingCourse(!props.defensiveDrivingCourse)}
              color="green"
              size="lg"
            >
              {props.defensiveDrivingCourse ? '✓ Completed' : '✗ Not Completed'}
            </InteractiveButton>
          </div>
          
          <GlowingBadge 
            glowColor="rgba(34, 197, 94, 0.5)" 
            className="mt-6 p-4 glass-card border border-green-500/30 rounded-xl"
          >
            <div className="flex items-center gap-2 text-green-400">
              <Gauge className="w-5 h-5" />
              <motion.span
                key={props.drivingScore}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Calculated Driving Score: {props.drivingScore}/100
              </motion.span>
            </div>
          </GlowingBadge>
        </div>
        </Card>
      </AnimatedCard>

      {/* Commute Details & Schedule */}
      <AnimatedCard delay={0.3}>
        <Card className="p-8 glass-card-strong border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3.8} delay={0.7}>
              <Briefcase className="w-6 h-6 text-orange-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Daily Commute & Usage Patterns
            </motion.h3>
          </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg text-white/90 mb-4">Commute Details</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Commute Distance (one-way): {props.commuteDistance} km</label>
                <Slider 
                  value={[props.commuteDistance]} 
                  onValueChange={(val) => props.setCommuteDistance(val[0])}
                  min={0}
                  max={100}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Commute Time: {props.commuteTime} mins</label>
                <Slider 
                  value={[props.commuteTime]} 
                  onValueChange={(val) => props.setCommuteTime(val[0])}
                  min={0}
                  max={180}
                  step={5}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Daily Commute: {props.dailyCommute} km</label>
                <Slider 
                  value={[props.dailyCommute]} 
                  onValueChange={(val) => props.setDailyCommute(val[0])}
                  min={0}
                  max={150}
                  step={5}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Morning Start Time</label>
                <Input 
                  type="time"
                  value={props.commuteStartTime}
                  onChange={(e) => props.setCommuteStartTime(e.target.value)}
                  className="glass-card border-white/20 text-white"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Evening Return Time</label>
                <Input 
                  type="time"
                  value={props.commuteReturnTime}
                  onChange={(e) => props.setCommuteReturnTime(e.target.value)}
                  className="glass-card border-white/20 text-white"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Parking at Work</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.parkingAtWork === 'secure'}
                    onClick={() => props.setParkingAtWork('secure')}
                    color="green"
                    size="md"
                  >
                    Secure
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.parkingAtWork === 'open'}
                    onClick={() => props.setParkingAtWork('open')}
                    color="yellow"
                    size="md"
                  >
                    Open
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.parkingAtWork === 'street'}
                    onClick={() => props.setParkingAtWork('street')}
                    color="red"
                    size="md"
                  >
                    Street
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.parkingAtWork === 'none'}
                    onClick={() => props.setParkingAtWork('none')}
                    color="red"
                    size="md"
                  >
                    None
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Additional Usage</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Weekend Driving: {props.weekendDriving} km/weekend</label>
                <Slider 
                  value={[props.weekendDriving]} 
                  onValueChange={(val) => props.setWeekendDriving(val[0])}
                  min={0}
                  max={500}
                  step={25}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Business Travel: {props.businessTravel} km/month</label>
                <Slider 
                  value={[props.businessTravel]} 
                  onValueChange={(val) => props.setBusinessTravel(val[0])}
                  min={0}
                  max={2000}
                  step={100}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Carpool Frequency</label>
                <div className="flex gap-3 flex-wrap">
                  {['never', 'sometimes', 'often', 'always'].map(freq => (
                    <InteractiveButton 
                      key={freq}
                      isActive={props.carpoolFrequency === freq}
                      onClick={() => props.setCarpoolFrequency(freq)}
                      color="green"
                      size="md"
                    >
                      {freq.charAt(0).toUpperCase() + freq.slice(1)}
                    </InteractiveButton>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <label className="block text-white/90 mb-3">Use Public Transport Sometimes</label>
            <InteractiveButton 
              isActive={props.alternateTransport}
              onClick={() => props.setAlternateTransport(!props.alternateTransport)}
              color="green"
              size="lg"
            >
              {props.alternateTransport ? '✓ Yes' : '✗ No'}
            </InteractiveButton>
          </div>
          
          <GlowingBadge 
            glowColor="rgba(251, 146, 60, 0.5)" 
            className="mt-6 p-4 glass-card border border-orange-500/30 rounded-xl"
          >
            <div className="flex items-center gap-2 text-orange-400">
              <Calendar className="w-5 h-5" />
              <motion.span
                key={props.monthlyMileage}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Total Monthly Mileage: {props.monthlyMileage} km
              </motion.span>
            </div>
          </GlowingBadge>
        </div>
        </Card>
      </AnimatedCard>

      {/* Location & Environment Details */}
      <AnimatedCard delay={0.4}>
        <Card className="p-8 glass-card-strong border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3.4} delay={0.8}>
              <MapPin className="w-6 h-6 text-pink-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Location & Environmental Risk Factors
            </motion.h3>
          </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg text-white/90 mb-4">Location Details</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">PIN Code</label>
                <Input 
                  type="text"
                  value={props.pincode}
                  onChange={(e) => props.setPincode(e.target.value)}
                  placeholder="e.g., 400001"
                  maxLength={6}
                  className="glass-card border-white/20 text-white"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Area Type</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.areaType === 'urban'}
                    onClick={() => props.setAreaType('urban')}
                    color="red"
                    size="md"
                  >
                    Urban
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.areaType === 'suburban'}
                    onClick={() => props.setAreaType('suburban')}
                    color="yellow"
                    size="md"
                  >
                    Suburban
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.areaType === 'rural'}
                    onClick={() => props.setAreaType('rural')}
                    color="green"
                    size="md"
                  >
                    Rural
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Crime Rate</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.crimeRate === 'low'}
                    onClick={() => props.setCrimeRate('low')}
                    color="green"
                    size="md"
                  >
                    Low
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.crimeRate === 'medium'}
                    onClick={() => props.setCrimeRate('medium')}
                    color="yellow"
                    size="md"
                  >
                    Medium
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.crimeRate === 'high'}
                    onClick={() => props.setCrimeRate('high')}
                    color="red"
                    size="md"
                  >
                    High
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Natural Disaster Zones</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">General Disaster Zone</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.disasterZone === 'low'}
                    onClick={() => props.setDisasterZone('low')}
                    color="green"
                    size="md"
                  >
                    Low Risk
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.disasterZone === 'medium'}
                    onClick={() => props.setDisasterZone('medium')}
                    color="yellow"
                    size="md"
                  >
                    Medium Risk
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.disasterZone === 'high'}
                    onClick={() => props.setDisasterZone('high')}
                    color="red"
                    size="md"
                  >
                    High Risk
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Earthquake Zone</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.earthquakeZone === 'low'}
                    onClick={() => props.setEarthquakeZone('low')}
                    color="green"
                    size="md"
                  >
                    Low
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.earthquakeZone === 'moderate'}
                    onClick={() => props.setEarthquakeZone('moderate')}
                    color="yellow"
                    size="md"
                  >
                    Moderate
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.earthquakeZone === 'high'}
                    onClick={() => props.setEarthquakeZone('high')}
                    color="red"
                    size="md"
                  >
                    High
                  </InteractiveButton>
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Flood Prone Area</label>
                <div className="flex gap-3">
                  <InteractiveButton 
                    isActive={!props.floodZone}
                    onClick={() => props.setFloodZone(false)}
                    color="green"
                    size="md"
                  >
                    ✗ No
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.floodZone}
                    onClick={() => props.setFloodZone(true)}
                    color="red"
                    size="md"
                  >
                    ✓ Yes
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Emergency Services & Security</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Nearest Hospital: {props.nearestHospitalKm} km</label>
                <Slider 
                  value={[props.nearestHospitalKm]} 
                  onValueChange={(val) => props.setNearestHospitalKm(val[0])}
                  min={0}
                  max={20}
                  step={0.5}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Nearest Police Station: {props.nearestPoliceStationKm} km</label>
                <Slider 
                  value={[props.nearestPoliceStationKm]} 
                  onValueChange={(val) => props.setNearestPoliceStationKm(val[0])}
                  min={0}
                  max={15}
                  step={0.5}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Security Features</label>
                <div className="flex gap-4">
                  <InteractiveButton 
                    isActive={props.gatedCommunity}
                    onClick={() => props.setGatedCommunity(!props.gatedCommunity)}
                    color="green"
                    size="md"
                  >
                    {props.gatedCommunity ? '✓' : '✗'} Gated
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.cctvCoverage}
                    onClick={() => props.setCctvCoverage(!props.cctvCoverage)}
                    color="green"
                    size="md"
                  >
                    {props.cctvCoverage ? '✓' : '✗'} CCTV
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </div>
          
          <GlowingBadge 
            glowColor="rgba(236, 72, 153, 0.5)" 
            className="mt-6 p-4 glass-card border border-pink-500/30 rounded-xl"
          >
            <div className="flex items-center gap-2 text-pink-400">
              <Shield className="w-5 h-5" />
              <motion.span
                key={props.locationRisk}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                Calculated Location Risk: {props.locationRisk}/100
              </motion.span>
            </div>
          </GlowingBadge>
        </div>
        </Card>
      </AnimatedCard>

      {/* Financial & Insurance History */}
      <AnimatedCard delay={0.4}>
        <Card className="p-8 glass-card-strong border border-white/20">
          <div className="flex items-center gap-3 mb-6">
            <FloatingIcon duration={3.3} delay={0.9}>
              <DollarSign className="w-6 h-6 text-yellow-400" />
            </FloatingIcon>
            <motion.h3 
              className="text-2xl text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              Financial Profile & Insurance History
            </motion.h3>
          </div>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg text-white/90 mb-4">Financial Information</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Annual Income: ₹{(props.annualIncome / 100000).toFixed(1)}L</label>
                <Slider 
                  value={[props.annualIncome]} 
                  onValueChange={(val) => props.setAnnualIncome(val[0])}
                  min={200000}
                  max={5000000}
                  step={50000}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Credit Score: {props.creditScore}</label>
                <Slider 
                  value={[props.creditScore]} 
                  onValueChange={(val) => props.setCreditScore(val[0])}
                  min={300}
                  max={900}
                  step={10}
                  dir="ltr"
                />
                <div className="text-xs text-white/60 mt-1">
                  {props.creditScore >= 750 ? 'Excellent' : props.creditScore >= 650 ? 'Good' : props.creditScore >= 550 ? 'Fair' : 'Poor'}
                </div>
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Home Ownership</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.homeOwnership === 'owned'}
                    onClick={() => props.setHomeOwnership('owned')}
                    color="green"
                    size="md"
                  >
                    Owned
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.homeOwnership === 'rented'}
                    onClick={() => props.setHomeOwnership('rented')}
                    color="yellow"
                    size="md"
                  >
                    Rented
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.homeOwnership === 'family'}
                    onClick={() => props.setHomeOwnership('family')}
                    color="blue"
                    size="md"
                  >
                    Family
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Previous Insurance Details</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Previous Insurer</label>
                <Input 
                  type="text"
                  value={props.previousInsurer}
                  onChange={(e) => props.setPreviousInsurer(e.target.value)}
                  placeholder="e.g., HDFC ERGO, ICICI Lombard"
                  className="glass-card border-white/20 text-white"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Years with Previous Insurer: {props.yearsWithPreviousInsurer}</label>
                <Slider 
                  value={[props.yearsWithPreviousInsurer]} 
                  onValueChange={(val) => props.setYearsWithPreviousInsurer(val[0])}
                  min={0}
                  max={20}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">No Claim Bonus: {props.noClaimBonus}%</label>
                <Slider 
                  value={[props.noClaimBonus]} 
                  onValueChange={(val) => props.setNoClaimBonus(val[0])}
                  min={0}
                  max={50}
                  step={5}
                  dir="ltr"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg text-white/90 mb-4">Claims History</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-white/90 mb-3">Total Claims (3 years): {props.claimHistory}</label>
                <Slider 
                  value={[props.claimHistory]} 
                  onValueChange={(val) => props.setClaimHistory(val[0])}
                  min={0}
                  max={5}
                  step={1}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Last Claim Amount: ₹{(props.lastClaimAmount / 1000).toFixed(0)}k</label>
                <Slider 
                  value={[props.lastClaimAmount]} 
                  onValueChange={(val) => props.setLastClaimAmount(val[0])}
                  min={0}
                  max={500000}
                  step={10000}
                  dir="ltr"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Last Claim Date</label>
                <Input 
                  type="date"
                  value={props.lastClaimDate}
                  onChange={(e) => props.setLastClaimDate(e.target.value)}
                  className="glass-card border-white/20 text-white"
                />
              </div>
              
              <div>
                <label className="block text-white/90 mb-3">Type of Last Claim</label>
                <div className="flex gap-3 flex-wrap">
                  <InteractiveButton 
                    isActive={props.claimType === 'theft'}
                    onClick={() => props.setClaimType('theft')}
                    color="red"
                    size="md"
                  >
                    Theft
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.claimType === 'accident'}
                    onClick={() => props.setClaimType('accident')}
                    color="orange"
                    size="md"
                  >
                    Accident
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.claimType === 'natural-disaster'}
                    onClick={() => props.setClaimType('natural-disaster')}
                    color="red"
                    size="md"
                  >
                    Natural Disaster
                  </InteractiveButton>
                  <InteractiveButton 
                    isActive={props.claimType === 'other'}
                    onClick={() => props.setClaimType('other')}
                    color="yellow"
                    size="md"
                  >
                    Other
                  </InteractiveButton>
                </div>
              </div>
            </div>
          </div>
          
          {/* Previous Policy Upload */}
          <div>
            <h4 className="text-lg text-white/90 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Previous Policy Document (Optional)
            </h4>
            <div className="glass-card p-4 border border-white/10 rounded-lg max-w-md">
              <label className="block text-white/80 mb-2 text-sm">Upload Previous Policy</label>
              <div className="relative">
                <input 
                  type="file" 
                  accept=".pdf"
                  onChange={handleFileUpload(props.setPreviousPolicyFile)}
                  className="hidden"
                  id="previous-policy"
                />
                <label 
                  htmlFor="previous-policy"
                  className="flex items-center gap-2 px-4 py-2 glass-card border border-white/20 rounded cursor-pointer hover:bg-white/5 transition-colors"
                >
                  <Upload className="w-4 h-4" />
                  <span className="text-sm">{props.previousPolicyFile || 'Upload Policy PDF'}</span>
                </label>
              </div>
            </div>
          </div>
        </div>
        </Card>
      </AnimatedCard>
    </div>
  );
}
