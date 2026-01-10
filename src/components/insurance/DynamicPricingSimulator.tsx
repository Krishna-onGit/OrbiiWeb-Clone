import { useState } from 'react';
import {
  TrendingUp, TrendingDown, Activity, Shield, Clock,
  AlertCircle, Info, Calculator, BarChart3, Users,
  Car, Heart, Eye, Zap, CheckCircle, XCircle,
  ArrowRight, ArrowLeft, Calendar, Gauge, Home, Upload, FileText,
  MapPin, Briefcase, Moon, Sun, Building, Navigation,
  Package, Wrench, DollarSign, Award, Phone, Mail, User, Star
} from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import DynamicPricingInputForm from './DynamicPricingInputForm';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import AnimatedBackground from './animations/AnimatedBackground';
import FloatingParticles from './animations/FloatingParticles';
import AnimatedCard from './animations/AnimatedCard';
import { motion } from 'framer-motion';

interface DynamicPricingSimulatorProps {
  onBack?: () => void;
}

export default function DynamicPricingSimulator({ onBack }: DynamicPricingSimulatorProps) {
  // Simulation state - all mock data
  const [age, setAge] = useState(30);

  // Detailed Health Metrics
  const [weight, setWeight] = useState(70); // kg
  const [height, setHeight] = useState(170); // cm
  const [exerciseFrequency, setExerciseFrequency] = useState(3); // days per week
  const [smokingStatus, setSmokingStatus] = useState('non-smoker'); // non-smoker, occasional, regular
  const [chronicConditions, setChronicConditions] = useState(0); // count
  const [bloodPressure, setBloodPressure] = useState('normal'); // normal, elevated, high

  // Detailed Driving Metrics
  const [hardBrakingEvents, setHardBrakingEvents] = useState(5); // per month
  const [speedingIncidents, setSpeedingIncidents] = useState(2); // per month
  const [nightDrivingHours, setNightDrivingHours] = useState(10); // hours per month
  const [highwayRatio, setHighwayRatio] = useState(50); // percentage

  // Detailed Mileage Breakdown
  const [dailyCommute, setDailyCommute] = useState(20); // km per day
  const [weekendDriving, setWeekendDriving] = useState(100); // km per weekend
  const [businessTravel, setBusinessTravel] = useState(50); // km per month

  // Detailed Location Metrics
  const [areaType, setAreaType] = useState('suburban'); // urban, suburban, rural
  const [crimeRate, setCrimeRate] = useState('medium'); // low, medium, high
  const [disasterZone, setDisasterZone] = useState('low'); // low, medium, high

  const [claimHistory, setClaimHistory] = useState(0);

  // Additional Personal Details
  const [gender, setGender] = useState('male'); // male, female, other
  const [occupation, setOccupation] = useState('professional'); // professional, skilled, business, student, retired
  const [maritalStatus, setMaritalStatus] = useState('single'); // single, married, divorced, widowed
  const [dependents, setDependents] = useState(0);
  const [yearsLicensed, setYearsLicensed] = useState(10);
  const [educationLevel, setEducationLevel] = useState('graduate'); // high-school, graduate, post-graduate

  // Extended Health Metrics
  const [restingHeartRate, setRestingHeartRate] = useState(70); // bpm
  const [cholesterolLevel, setCholesterolLevel] = useState('normal'); // normal, borderline, high
  const [diabetesStatus, setDiabetesStatus] = useState('none'); // none, pre-diabetic, type1, type2
  const [alcoholConsumption, setAlcoholConsumption] = useState('moderate'); // none, light, moderate, heavy
  const [lastCheckupMonths, setLastCheckupMonths] = useState(6); // months ago
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState([]); // array of conditions
  const [currentMedications, setCurrentMedications] = useState(0);
  const [mentalHealthStatus, setMentalHealthStatus] = useState('good'); // excellent, good, fair, poor
  const [sleepHoursPerNight, setSleepHoursPerNight] = useState(7);

  // Vehicle Details
  const [vehicleAge, setVehicleAge] = useState(3); // years
  const [vehicleMake, setVehicleMake] = useState('Honda');
  const [vehicleModel, setVehicleModel] = useState('City');
  const [vehicleValue, setVehicleValue] = useState(800000); // INR
  const [engineCC, setEngineCC] = useState(1500);
  const [fuelType, setFuelType] = useState('petrol'); // petrol, diesel, cng, electric, hybrid
  const [hasABS, setHasABS] = useState(true);
  const [hasAirbags, setHasAirbags] = useState(6);
  const [parkingSituation, setParkingSituation] = useState('covered'); // covered, open, street
  const [annualMaintenance, setAnnualMaintenance] = useState('regular'); // poor, fair, regular, excellent
  const [modificationsPresent, setModificationsPresent] = useState(false);

  // Detailed Driving Patterns
  const [drivingExperience, setDrivingExperience] = useState(10); // years
  const [trafficViolations, setTrafficViolations] = useState(0); // last 3 years
  const [accidentsAtFault, setAccidentsAtFault] = useState(0); // last 3 years
  const [defensiveDrivingCourse, setDefensiveDrivingCourse] = useState(false);
  const [peakHourDriving, setPeakHourDriving] = useState(50); // percentage
  const [cityDriving, setCityDriving] = useState(60); // percentage
  const [avgTripDuration, setAvgTripDuration] = useState(45); // minutes
  const [weekdayDriving, setWeekdayDriving] = useState(5); // days per week
  const [longDistanceTrips, setLongDistanceTrips] = useState(2); // per month

  // Commute Specifics
  const [commuteDistance, setCommuteDistance] = useState(20); // km one way
  const [commuteTime, setCommuteTime] = useState(45); // minutes
  const [commuteStartTime, setCommuteStartTime] = useState('08:00');
  const [commuteReturnTime, setCommuteReturnTime] = useState('18:00');
  const [parkingAtWork, setParkingAtWork] = useState('secure'); // secure, open, street, none
  const [alternateTransport, setAlternateTransport] = useState(false); // use public transport sometimes
  const [carpoolFrequency, setCarpoolFrequency] = useState('never'); // never, sometimes, often, always

  // Location Details Extended
  const [pincode, setPincode] = useState('');
  const [floodZone, setFloodZone] = useState(false);
  const [earthquakeZone, setEarthquakeZone] = useState('low'); // low, moderate, high
  const [nearestHospitalKm, setNearestHospitalKm] = useState(3);
  const [nearestPoliceStationKm, setNearestPoliceStationKm] = useState(2);
  const [gatedCommunity, setGatedCommunity] = useState(true);
  const [cctvCoverage, setCctvCoverage] = useState(true);

  // Financial & Lifestyle
  const [annualIncome, setAnnualIncome] = useState(800000); // INR
  const [creditScore, setCreditScore] = useState(750);
  const [homeOwnership, setHomeOwnership] = useState('owned'); // owned, rented, family
  const [previousInsurer, setPreviousInsurer] = useState('');
  const [yearsWithPreviousInsurer, setYearsWithPreviousInsurer] = useState(2);
  const [noClaimBonus, setNoClaimBonus] = useState(20); // percentage

  // Claims Details
  const [lastClaimAmount, setLastClaimAmount] = useState(0);
  const [lastClaimDate, setLastClaimDate] = useState('');
  const [claimType, setClaimType] = useState(''); // theft, accident, natural-disaster, etc

  // File Uploads (storing file names only for simulation)
  const [medicalReportFile, setMedicalReportFile] = useState(null);
  const [drivingLicenseFile, setDrivingLicenseFile] = useState(null);
  const [vehicleRCFile, setVehicleRCFile] = useState(null);
  const [previousPolicyFile, setPreviousPolicyFile] = useState(null);
  const [fitnessReportFile, setFitnessReportFile] = useState(null);
  const [pollutionCertFile, setPollutionCertFile] = useState(null);
  const [aadhaarCardFile, setAadhaarCardFile] = useState(null);
  const [panCardFile, setPanCardFile] = useState(null);
  const [existingPolicyFile, setExistingPolicyFile] = useState(null);

  // Calculated scores based on detailed inputs
  const calculateHealthScore = () => {
    let score = 100;

    // BMI calculation
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);

    // BMI penalties
    if (bmi < 18.5) score -= 15; // Underweight
    else if (bmi >= 25 && bmi < 30) score -= 10; // Overweight
    else if (bmi >= 30) score -= 25; // Obese

    // Exercise frequency bonus
    if (exerciseFrequency >= 5) score += 10;
    else if (exerciseFrequency >= 3) score += 5;
    else if (exerciseFrequency <= 1) score -= 15;

    // Smoking penalties
    if (smokingStatus === 'regular') score -= 30;
    else if (smokingStatus === 'occasional') score -= 15;

    // Chronic conditions penalty
    score -= chronicConditions * 10;

    // Blood pressure penalty
    if (bloodPressure === 'elevated') score -= 10;
    else if (bloodPressure === 'high') score -= 20;

    // Heart rate assessment
    if (restingHeartRate < 60 || restingHeartRate > 100) score -= 5;
    else if (restingHeartRate >= 60 && restingHeartRate <= 75) score += 5;

    // Cholesterol impact
    if (cholesterolLevel === 'high') score -= 15;
    else if (cholesterolLevel === 'borderline') score -= 7;

    // Diabetes impact
    if (diabetesStatus === 'type1' || diabetesStatus === 'type2') score -= 20;
    else if (diabetesStatus === 'pre-diabetic') score -= 10;

    // Alcohol consumption
    if (alcoholConsumption === 'heavy') score -= 15;
    else if (alcoholConsumption === 'none') score += 5;

    // Medication count
    score -= currentMedications * 3;

    // Mental health
    if (mentalHealthStatus === 'excellent') score += 5;
    else if (mentalHealthStatus === 'poor') score -= 15;
    else if (mentalHealthStatus === 'fair') score -= 8;

    // Sleep quality
    if (sleepHoursPerNight >= 7 && sleepHoursPerNight <= 9) score += 5;
    else if (sleepHoursPerNight < 6 || sleepHoursPerNight > 10) score -= 10;

    // Regular checkups bonus
    if (lastCheckupMonths <= 6) score += 5;
    else if (lastCheckupMonths > 24) score -= 10;

    return Math.max(0, Math.min(100, score));
  };

  const calculateDrivingScore = () => {
    let score = 100;

    // Hard braking penalty
    if (hardBrakingEvents > 10) score -= 25;
    else if (hardBrakingEvents > 5) score -= 15;
    else if (hardBrakingEvents <= 2) score += 5;

    // Speeding incidents penalty
    if (speedingIncidents > 5) score -= 30;
    else if (speedingIncidents > 2) score -= 15;
    else if (speedingIncidents === 0) score += 10;

    // Night driving penalty (higher risk)
    if (nightDrivingHours > 30) score -= 15;
    else if (nightDrivingHours > 15) score -= 8;

    // Highway driving bonus (safer than city)
    if (highwayRatio > 70) score += 10;
    else if (highwayRatio < 30) score -= 10;

    // Driving experience bonus
    if (drivingExperience >= 10) score += 10;
    else if (drivingExperience >= 5) score += 5;
    else if (drivingExperience < 3) score -= 15;

    // Traffic violations penalty
    score -= trafficViolations * 10;

    // Accidents at fault penalty
    score -= accidentsAtFault * 15;

    // Defensive driving course bonus
    if (defensiveDrivingCourse) score += 10;

    // Peak hour driving penalty
    if (peakHourDriving > 70) score -= 10;
    else if (peakHourDriving < 30) score += 5;

    // City driving penalty (more congestion)
    if (cityDriving > 80) score -= 10;
    else if (cityDriving < 40) score += 5;

    return Math.max(0, Math.min(100, score));
  };

  const calculateMonthlyMileage = () => {
    // Calculate total monthly mileage from components
    const commuteMileage = dailyCommute * 22; // ~22 working days
    const weekendMileage = weekendDriving * 4; // 4 weekends
    const totalMileage = commuteMileage + weekendMileage + businessTravel;

    return Math.round(totalMileage);
  };

  const calculateLocationRisk = () => {
    let risk = 50; // Base risk

    // Area type impact
    if (areaType === 'urban') risk += 20;
    else if (areaType === 'rural') risk -= 15;

    // Crime rate impact
    if (crimeRate === 'high') risk += 25;
    else if (crimeRate === 'low') risk -= 20;

    // Disaster zone impact
    if (disasterZone === 'high') risk += 20;
    else if (disasterZone === 'low') risk -= 10;

    // Flood zone impact
    if (floodZone) risk += 15;

    // Earthquake zone impact
    if (earthquakeZone === 'high') risk += 15;
    else if (earthquakeZone === 'low') risk -= 5;

    // Parking situation impact
    if (parkingSituation === 'street') risk += 15;
    else if (parkingSituation === 'covered') risk -= 10;

    // Gated community bonus
    if (gatedCommunity) risk -= 10;

    // CCTV coverage bonus
    if (cctvCoverage) risk -= 8;

    // Emergency services proximity bonus
    if (nearestHospitalKm <= 2) risk -= 5;
    if (nearestPoliceStationKm <= 1) risk -= 5;

    return Math.max(0, Math.min(100, risk));
  };

  // Use calculated values
  const healthScore = calculateHealthScore();
  const drivingScore = calculateDrivingScore();
  const monthlyMileage = calculateMonthlyMileage();
  const locationRisk = calculateLocationRisk();

  // Form submission state
  const [showResults, setShowResults] = useState(false);

  // Calculate simulated premiums
  const calculateBasePremium = () => {
    // Base premium starts at ₹10,000
    let base = 10000;

    // Age factor (younger = higher risk)
    if (age < 25) base *= 1.3;
    else if (age < 35) base *= 1.1;
    else if (age > 60) base *= 1.2;

    return Math.round(base);
  };

  const calculateRiskModifiers = () => {
    const base = calculateBasePremium();
    let modifiers = {
      healthFactor: 0,
      drivingFactor: 0,
      usageFactor: 0,
      claimFactor: 0,
      locationFactor: 0
    };

    // Health score impact (better health = lower premium)
    modifiers.healthFactor = Math.round(base * ((100 - healthScore) / 100) * 0.2);

    // Driving score impact (better driving = lower premium)
    modifiers.drivingFactor = Math.round(base * ((100 - drivingScore) / 100) * 0.25);

    // Usage factor (more mileage = higher risk)
    const mileageMultiplier = monthlyMileage / 500;
    modifiers.usageFactor = Math.round(base * (mileageMultiplier - 1) * 0.15);

    // Claim history (each claim adds cost)
    modifiers.claimFactor = claimHistory * 1500;

    // Location risk
    modifiers.locationFactor = Math.round(base * (locationRisk / 100) * 0.1);

    return modifiers;
  };

  const calculateDynamicAdjustment = () => {
    // Simulated time-based adjustment
    const seasonalFactor = -500; // Winter discount
    const behaviorImprovement = healthScore > 80 && drivingScore > 85 ? -800 : 0;
    return seasonalFactor + behaviorImprovement;
  };

  const calculateFinalPremium = () => {
    const base = calculateBasePremium();
    const modifiers = calculateRiskModifiers();
    const dynamicAdj = calculateDynamicAdjustment();

    const total = base +
      modifiers.healthFactor +
      modifiers.drivingFactor +
      modifiers.usageFactor +
      modifiers.claimFactor +
      modifiers.locationFactor +
      dynamicAdj;

    return Math.max(5000, Math.round(total)); // Minimum ₹5,000
  };

  const basePremium = calculateBasePremium();
  const modifiers = calculateRiskModifiers();
  const dynamicAdj = calculateDynamicAdjustment();
  const finalPremium = calculateFinalPremium();
  const traditionalPremium = 15000; // Static comparison

  // Calculate percentage difference
  const savingsPercent = Math.round(((traditionalPremium - finalPremium) / traditionalPremium) * 100);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Simulation Warning Banner */}
      <div className="bg-transparent border-none sticky top-0 z-50 relative">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center gap-3 justify-center">
            <AlertCircle className="w-5 h-5 text-[#39FF14]" />
            <p className="text-white">
              <strong className="text-white font-medium">SIMULATION ONLY</strong> - This is a demonstration using assumed data.
              No real pricing, transactions, or data collection occurs.
            </p>
          </div>
        </div>
      </div>

      {!showResults ? (
        // INPUT FORM PAGE
        <>
          {/* Hero Section */}
          <section className="relative py-20 px-6 border-b border-gray-800 z-10 bg-black">
            <div className="max-w-7xl mx-auto relative">
              {/* Back to Home Button */}
              {onBack && (
                <div className="mb-8">
                  <Button
                    onClick={onBack}
                    variant="ghost"
                    className="text-white hover:text-[#39FF14] hover:bg-white/10 transition-colors duration-200"
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back to Home
                  </Button>
                </div>
              )}

              <div className="text-center max-w-4xl mx-auto">
                <div>
                  <Badge className="mb-6 border-white/20 text-white bg-white/10">
                    Step 1 of 2: Input Your Information
                  </Badge>
                </div>
                <h1 className="mb-6 text-5xl md:text-6xl text-white">
                  Get Your Personalized Insurance Quote
                </h1>
                <p className="text-xl text-white/60 mb-8">
                  Provide your details below to calculate an accurate insurance premium based on your unique risk profile.
                  All calculations are performed instantly and no data is stored.
                </p>
              </div>
            </div>
          </section>

          {/* Input Form Section */}
          <section className="py-16 px-6 relative z-10 bg-black">
            <div className="max-w-6xl mx-auto">
              <DynamicPricingInputForm
                // Personal
                age={age}
                setAge={setAge}
                gender={gender}
                setGender={setGender}
                occupation={occupation}
                setOccupation={setOccupation}
                maritalStatus={maritalStatus}
                setMaritalStatus={setMaritalStatus}
                dependents={dependents}
                setDependents={setDependents}
                yearsLicensed={yearsLicensed}
                setYearsLicensed={setYearsLicensed}
                educationLevel={educationLevel}
                setEducationLevel={setEducationLevel}

                // Health
                weight={weight}
                setWeight={setWeight}
                height={height}
                setHeight={setHeight}
                exerciseFrequency={exerciseFrequency}
                setExerciseFrequency={setExerciseFrequency}
                smokingStatus={smokingStatus}
                setSmokingStatus={setSmokingStatus}
                chronicConditions={chronicConditions}
                setChronicConditions={setChronicConditions}
                bloodPressure={bloodPressure}
                setBloodPressure={setBloodPressure}
                restingHeartRate={restingHeartRate}
                setRestingHeartRate={setRestingHeartRate}
                cholesterolLevel={cholesterolLevel}
                setCholesterolLevel={setCholesterolLevel}
                diabetesStatus={diabetesStatus}
                setDiabetesStatus={setDiabetesStatus}
                alcoholConsumption={alcoholConsumption}
                setAlcoholConsumption={setAlcoholConsumption}
                lastCheckupMonths={lastCheckupMonths}
                setLastCheckupMonths={setLastCheckupMonths}
                currentMedications={currentMedications}
                setCurrentMedications={setCurrentMedications}
                mentalHealthStatus={mentalHealthStatus}
                setMentalHealthStatus={setMentalHealthStatus}
                sleepHoursPerNight={sleepHoursPerNight}
                setSleepHoursPerNight={setSleepHoursPerNight}

                // Vehicle
                vehicleAge={vehicleAge}
                setVehicleAge={setVehicleAge}
                vehicleMake={vehicleMake}
                setVehicleMake={setVehicleMake}
                vehicleModel={vehicleModel}
                setVehicleModel={setVehicleModel}
                vehicleValue={vehicleValue}
                setVehicleValue={setVehicleValue}
                engineCC={engineCC}
                setEngineCC={setEngineCC}
                fuelType={fuelType}
                setFuelType={setFuelType}
                hasABS={hasABS}
                setHasABS={setHasABS}
                hasAirbags={hasAirbags}
                setHasAirbags={setHasAirbags}
                parkingSituation={parkingSituation}
                setParkingSituation={setParkingSituation}
                annualMaintenance={annualMaintenance}
                setAnnualMaintenance={setAnnualMaintenance}
                modificationsPresent={modificationsPresent}
                setModificationsPresent={setModificationsPresent}

                // Driving
                hardBrakingEvents={hardBrakingEvents}
                setHardBrakingEvents={setHardBrakingEvents}
                speedingIncidents={speedingIncidents}
                setSpeedingIncidents={setSpeedingIncidents}
                nightDrivingHours={nightDrivingHours}
                setNightDrivingHours={setNightDrivingHours}
                highwayRatio={highwayRatio}
                setHighwayRatio={setHighwayRatio}
                drivingExperience={drivingExperience}
                setDrivingExperience={setDrivingExperience}
                trafficViolations={trafficViolations}
                setTrafficViolations={setTrafficViolations}
                accidentsAtFault={accidentsAtFault}
                setAccidentsAtFault={setAccidentsAtFault}
                defensiveDrivingCourse={defensiveDrivingCourse}
                setDefensiveDrivingCourse={setDefensiveDrivingCourse}
                peakHourDriving={peakHourDriving}
                setPeakHourDriving={setPeakHourDriving}
                cityDriving={cityDriving}
                setCityDriving={setCityDriving}
                avgTripDuration={avgTripDuration}
                setAvgTripDuration={setAvgTripDuration}
                weekdayDriving={weekdayDriving}
                setWeekdayDriving={setWeekdayDriving}
                longDistanceTrips={longDistanceTrips}
                setLongDistanceTrips={setLongDistanceTrips}

                // Commute
                dailyCommute={dailyCommute}
                setDailyCommute={setDailyCommute}
                weekendDriving={weekendDriving}
                setWeekendDriving={setWeekendDriving}
                businessTravel={businessTravel}
                setBusinessTravel={setBusinessTravel}
                commuteDistance={commuteDistance}
                setCommuteDistance={setCommuteDistance}
                commuteTime={commuteTime}
                setCommuteTime={setCommuteTime}
                commuteStartTime={commuteStartTime}
                setCommuteStartTime={setCommuteStartTime}
                commuteReturnTime={commuteReturnTime}
                setCommuteReturnTime={setCommuteReturnTime}
                parkingAtWork={parkingAtWork}
                setParkingAtWork={setParkingAtWork}
                alternateTransport={alternateTransport}
                setAlternateTransport={setAlternateTransport}
                carpoolFrequency={carpoolFrequency}
                setCarpoolFrequency={setCarpoolFrequency}

                // Location
                areaType={areaType}
                setAreaType={setAreaType}
                crimeRate={crimeRate}
                setCrimeRate={setCrimeRate}
                disasterZone={disasterZone}
                setDisasterZone={setDisasterZone}
                pincode={pincode}
                setPincode={setPincode}
                floodZone={floodZone}
                setFloodZone={setFloodZone}
                earthquakeZone={earthquakeZone}
                setEarthquakeZone={setEarthquakeZone}
                nearestHospitalKm={nearestHospitalKm}
                setNearestHospitalKm={setNearestHospitalKm}
                nearestPoliceStationKm={nearestPoliceStationKm}
                setNearestPoliceStationKm={setNearestPoliceStationKm}
                gatedCommunity={gatedCommunity}
                setGatedCommunity={setGatedCommunity}
                cctvCoverage={cctvCoverage}
                setCctvCoverage={setCctvCoverage}

                // Financial
                annualIncome={annualIncome}
                setAnnualIncome={setAnnualIncome}
                creditScore={creditScore}
                setCreditScore={setCreditScore}
                homeOwnership={homeOwnership}
                setHomeOwnership={setHomeOwnership}
                previousInsurer={previousInsurer}
                setPreviousInsurer={setPreviousInsurer}
                yearsWithPreviousInsurer={yearsWithPreviousInsurer}
                setYearsWithPreviousInsurer={setYearsWithPreviousInsurer}
                noClaimBonus={noClaimBonus}
                setNoClaimBonus={setNoClaimBonus}

                // Claims
                claimHistory={claimHistory}
                setClaimHistory={setClaimHistory}
                lastClaimAmount={lastClaimAmount}
                setLastClaimAmount={setLastClaimAmount}
                lastClaimDate={lastClaimDate}
                setLastClaimDate={setLastClaimDate}
                claimType={claimType}
                setClaimType={setClaimType}

                // Files
                medicalReportFile={medicalReportFile}
                setMedicalReportFile={setMedicalReportFile}
                drivingLicenseFile={drivingLicenseFile}
                setDrivingLicenseFile={setDrivingLicenseFile}
                vehicleRCFile={vehicleRCFile}
                setVehicleRCFile={setVehicleRCFile}
                previousPolicyFile={previousPolicyFile}
                setPreviousPolicyFile={setPreviousPolicyFile}
                fitnessReportFile={fitnessReportFile}
                setFitnessReportFile={setFitnessReportFile}
                pollutionCertFile={pollutionCertFile}
                setPollutionCertFile={setPollutionCertFile}
                aadhaarCardFile={aadhaarCardFile}
                setAadhaarCardFile={setAadhaarCardFile}
                panCardFile={panCardFile}
                setPanCardFile={setPanCardFile}
                existingPolicyFile={existingPolicyFile}
                setExistingPolicyFile={setExistingPolicyFile}

                // Scores
                healthScore={healthScore}
                drivingScore={drivingScore}
                monthlyMileage={monthlyMileage}
                locationRisk={locationRisk}
              />

              {/* Submit Button */}
              <motion.div
                className="flex justify-center pt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Button
                    onClick={() => setShowResults(true)}
                    className="min-w-[280px] px-12 py-7 text-xl 
                      bg-[#39FF14] text-black
                      hover:bg-[#2ee610]
                      border border-[#39FF14]/20
                      transition-colors duration-200"
                  >
                    <Calculator className="w-7 h-7 mr-3" />
                    <span>Calculate My Premium</span>
                    <ArrowRight className="w-7 h-7 ml-3" />
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>
        </>
      ) : (
        // RESULTS PAGE (existing content)
        <>
          <section className="relative py-20 px-6 border-b border-gray-800 z-10 bg-black">
            <div className="max-w-7xl mx-auto relative">
              {/* Back Button */}
              <div className="mb-8">
                <Button
                  onClick={() => setShowResults(false)}
                  variant="outline"
                  className="border-white/20 hover:bg-white/10 text-white"
                >
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Input Form
                </Button>
              </div>

              <div className="text-center max-w-4xl mx-auto">
                <div>
                  <Badge className="mb-6 border-white/20 text-white bg-white/10">
                    Step 2 of 2: Your Results
                  </Badge>
                </div>
                <h1 className="mb-6 text-5xl md:text-6xl text-white">
                  Your Personalized Insurance Premium
                </h1>
                <p className="text-xl text-white/60 mb-8">
                  Based on your inputs, here's your calculated insurance premium with a detailed breakdown
                  of all risk factors and how they impact your final price.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <div className="flex items-center gap-2 text-white/60">
                    <Eye className="w-5 h-5" />
                    <span>View Only</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Shield className="w-5 h-5" />
                    <span>Non-Binding</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/60">
                    <Calculator className="w-5 h-5" />
                    <span>Simulated Data</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Simulator */}
          <section className="py-16 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Left: Pricing Breakdown */}
                <div className="space-y-6">
                  {/* Final Premium Card */}
                  <Card className="p-8 glass-card border border-white/20 bg-white/5">
                    <div className="text-center mb-6">
                      <p className="text-white/60 mb-2">Your Simulated Premium</p>
                      <div className="text-5xl mb-2 text-white font-medium">
                        ₹{finalPremium.toLocaleString('en-IN')}
                      </div>
                      <p className="text-white/50">per year</p>
                    </div>

                    {/* Comparison with Traditional */}
                    <div className="flex items-center justify-center gap-4 p-4 glass-card border border-white/20 rounded-xl bg-white/10">
                      <div className="text-center">
                        <p className="text-xs text-white/60 mb-1">Traditional Pricing</p>
                        <p className="text-2xl text-white/40 line-through">₹{traditionalPremium.toLocaleString('en-IN')}</p>
                      </div>
                      <ArrowRight className="w-6 h-6 text-white/40" />
                      <div className="text-center">
                        <p className="text-xs text-white/60 mb-1">Your Personalized Price</p>
                        <p className="text-2xl text-[#39FF14]">₹{finalPremium.toLocaleString('en-IN')}</p>
                      </div>
                    </div>

                    {savingsPercent > 0 ? (
                      <div className="mt-4 p-4 bg-[#39FF14]/10 border border-[#39FF14]/20 rounded-xl">
                        <div className="flex items-center gap-2 justify-center text-[#39FF14]">
                          <TrendingDown className="w-5 h-5" />
                          <span>You save {savingsPercent}% with personalized pricing!</span>
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 p-4 bg-red-900/20 border border-red-500/30 rounded-xl">
                        <div className="flex items-center gap-2 justify-center text-red-400">
                          <TrendingUp className="w-5 h-5" />
                          <span>Premium is {Math.abs(savingsPercent)}% higher due to risk factors</span>
                        </div>
                      </div>
                    )}
                  </Card>

                  {/* Detailed Breakdown */}
                  <Card className="p-8 glass-card border border-white/20 bg-white/5">
                    <h4 className="mb-6 flex items-center gap-2 text-2xl text-white">
                      <Calculator className="w-5 h-5" />
                      Stepwise Premium Calculation
                    </h4>

                    <div className="space-y-4">
                      {/* Base Premium */}
                      <div className="flex justify-between items-center pb-4 border-b border-white/20">
                        <div>
                          <p className="text-white">Base Premium</p>
                          <p className="text-xs text-white/50">Age-adjusted base rate</p>
                        </div>
                        <span className="text-xl text-white">₹{basePremium.toLocaleString('en-IN')}</span>
                      </div>

                      {/* Risk Modifiers */}
                      <div className="space-y-3">
                        <p className="text-sm text-white/60">Risk Modifiers</p>

                        <div className="flex justify-between items-center pl-4">
                          <div className="flex items-center gap-2">
                            <Heart className="w-4 h-4 text-white/50" />
                            <span className="text-white/70">Health Factor</span>
                          </div>
                          <span className={modifiers.healthFactor > 0 ? 'text-red-400' : 'text-[#39FF14]'}>
                            {modifiers.healthFactor > 0 ? '+' : ''}₹{modifiers.healthFactor.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pl-4">
                          <div className="flex items-center gap-2">
                            <Car className="w-4 h-4 text-white/50" />
                            <span className="text-white/70">Driving Factor</span>
                          </div>
                          <span className={modifiers.drivingFactor > 0 ? 'text-red-400' : 'text-[#39FF14]'}>
                            {modifiers.drivingFactor > 0 ? '+' : ''}₹{modifiers.drivingFactor.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pl-4">
                          <div className="flex items-center gap-2">
                            <Gauge className="w-4 h-4 text-white/50" />
                            <span className="text-white/70">Usage Factor</span>
                          </div>
                          <span className={modifiers.usageFactor > 0 ? 'text-red-400' : 'text-[#39FF14]'}>
                            {modifiers.usageFactor > 0 ? '+' : ''}₹{modifiers.usageFactor.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pl-4">
                          <div className="flex items-center gap-2">
                            <AlertCircle className="w-4 h-4 text-white/50" />
                            <span className="text-white/70">Claim History</span>
                          </div>
                          <span className={modifiers.claimFactor > 0 ? 'text-red-400' : 'text-[#39FF14]'}>
                            {modifiers.claimFactor > 0 ? '+' : ''}₹{modifiers.claimFactor.toLocaleString('en-IN')}
                          </span>
                        </div>

                        <div className="flex justify-between items-center pl-4">
                          <div className="flex items-center gap-2">
                            <Home className="w-4 h-4 text-white/50" />
                            <span className="text-white/70">Location Factor</span>
                          </div>
                          <span className={modifiers.locationFactor > 0 ? 'text-red-400' : 'text-[#39FF14]'}>
                            {modifiers.locationFactor > 0 ? '+' : ''}₹{modifiers.locationFactor.toLocaleString('en-IN')}
                          </span>
                        </div>
                      </div>

                      {/* Dynamic Adjustment */}
                      <div className="flex justify-between items-center pt-4 border-t border-white/20">
                        <div>
                          <p className="text-white">Dynamic Adjustment</p>
                          <p className="text-xs text-white/50">Time & behavior-based</p>
                        </div>
                        <span className={dynamicAdj > 0 ? 'text-red-400' : 'text-[#39FF14]'}>
                          {dynamicAdj > 0 ? '+' : ''}₹{dynamicAdj.toLocaleString('en-IN')}
                        </span>
                      </div>

                      {/* Final Total */}
                      <div className="flex justify-between items-center pt-4 border-t-2 border-white/30">
                        <p className="text-lg text-white font-medium">Final Premium</p>
                        <span className="text-2xl text-white font-medium">₹{finalPremium.toLocaleString('en-IN')}</span>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl">
                      <div className="flex items-start gap-2">
                        <Info className="w-4 h-4 text-blue-400 mt-0.5" />
                        <p className="text-xs text-blue-300">
                          This calculation is for demonstration only. Real pricing would involve actuarial models,
                          regulatory compliance, and underwriting approval.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Right: Input Controls */}
                <div className="space-y-6">
                  <Card className="p-8 glass-card border border-white/20 bg-white/5">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl text-white">Risk Factor Inputs</h3>
                      <Badge variant="outline" className="border-white/20 text-white/60 bg-white/10">
                        Simulated Data
                      </Badge>
                    </div>

                    {/* Age Input */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl text-white">{age} years</span>
                        <label className="flex items-center gap-2 text-white/90">
                          <Users className="w-4 h-4" />
                          Age
                        </label>
                      </div>
                      <Slider
                        value={[age]}
                        onValueChange={(val) => setAge(val[0])}
                        min={18}
                        max={75}
                        step={1}
                        className="mb-2"
                        dir="ltr"
                      />
                      <p className="text-xs text-gray-500">
                        Demographic factor: Age influences base risk assessment
                      </p>
                    </div>

                    {/* Health Score */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl text-white">{healthScore}/100</span>
                        <label className="flex items-center gap-2 text-white">
                          <Heart className="w-4 h-4" />
                          Health Score
                        </label>
                      </div>
                      <Slider
                        value={[healthScore]}
                        onValueChange={() => { }}
                        min={0}
                        max={100}
                        step={5}
                        className="mb-2 pointer-events-none opacity-70"
                        dir="ltr"
                        disabled
                      />
                      <p className="text-xs text-white/50">
                        Behavioral factor: Based on fitness activity, vital signs, lifestyle
                      </p>
                    </div>

                    {/* Driving Score */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl text-white">{drivingScore}/100</span>
                        <label className="flex items-center gap-2 text-white">
                          <Car className="w-4 h-4" />
                          Driving Score
                        </label>
                      </div>
                      <Slider
                        value={[drivingScore]}
                        onValueChange={() => { }}
                        min={0}
                        max={100}
                        step={5}
                        className="mb-2 pointer-events-none opacity-70"
                        dir="ltr"
                        disabled
                      />
                      <p className="text-xs text-white/50">
                        Usage metric: Based on speed, braking, acceleration patterns
                      </p>
                    </div>

                    {/* Monthly Mileage */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl text-white">{monthlyMileage} km</span>
                        <label className="flex items-center gap-2 text-white">
                          <Gauge className="w-4 h-4" />
                          Monthly Mileage
                        </label>
                      </div>
                      <Slider
                        value={[monthlyMileage]}
                        onValueChange={() => { }}
                        min={100}
                        max={2000}
                        step={100}
                        className="mb-2 pointer-events-none opacity-70"
                        dir="ltr"
                        disabled
                      />
                      <p className="text-xs text-white/50">
                        Usage metric: Higher usage = increased exposure to risk
                      </p>
                    </div>

                    {/* Claim History */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl text-white">{claimHistory}</span>
                        <label className="flex items-center gap-2 text-white">
                          <AlertCircle className="w-4 h-4" />
                          Claims (Last 3 Years)
                        </label>
                      </div>
                      <Slider
                        value={[claimHistory]}
                        onValueChange={(val) => setClaimHistory(val[0])}
                        min={0}
                        max={5}
                        step={1}
                        className="mb-2"
                        dir="ltr"
                      />
                      <p className="text-xs text-white/50">
                        Historical factor: Past claims indicate future risk probability
                      </p>
                    </div>

                    {/* Location Risk */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xl text-white">{locationRisk}/100</span>
                        <label className="flex items-center gap-2 text-white">
                          <Home className="w-4 h-4" />
                          Location Risk Index
                        </label>
                      </div>
                      <Slider
                        value={[locationRisk]}
                        onValueChange={() => { }}
                        min={0}
                        max={100}
                        step={10}
                        className="mb-2 pointer-events-none opacity-70"
                        dir="ltr"
                        disabled
                      />
                      <p className="text-xs text-white/60">
                        Contextual factor: Crime rate, accident frequency, natural disaster risk
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Pricing Timeline Simulation */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 glass-card border-white/30 text-white">Time-Based Simulation</Badge>
                <h2 className="mb-4 text-4xl text-white glow-text-blue">Dynamic Premium Adjustments Over Time</h2>
                <p className="text-white/80 max-w-3xl mx-auto">
                  See how your premium could change based on behavioral improvements, seasonal factors,
                  or risk events throughout the policy year.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Month 1-4: Initial Period */}
                <Card className="p-6 glass-card-strong glow-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <h5 className="text-white">Month 1-4</h5>
                    </div>
                    <Badge variant="outline" className="border-blue-400/40 text-blue-400">
                      Initial
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl mb-2 text-white">₹{finalPremium.toLocaleString('en-IN')}</div>
                    <p className="text-xs text-white/60">Base personalized premium</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                      <p className="text-sm text-white/80">Initial risk profile assessed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Activity className="w-4 h-4 text-blue-400 mt-0.5" />
                      <p className="text-sm text-white/80">Behavior tracking begins</p>
                    </div>
                  </div>
                </Card>

                {/* Month 5-8: Improvement Period */}
                <Card className="p-6 glass-card-strong glow-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <h5 className="text-white">Month 5-8</h5>
                    </div>
                    <Badge variant="outline" className="border-green-400/40 text-green-400">
                      Improved
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl mb-2 text-green-400">
                      ₹{Math.round(finalPremium * 0.92).toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-white/60">8% reduction for good behavior</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <TrendingDown className="w-4 h-4 text-green-400 mt-0.5" />
                      <p className="text-sm text-white/80">Zero claims filed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Heart className="w-4 h-4 text-green-400 mt-0.5" />
                      <p className="text-sm text-white/80">Health metrics improved</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Car className="w-4 h-4 text-green-400 mt-0.5" />
                      <p className="text-sm text-white/80">Safe driving score +10%</p>
                    </div>
                  </div>
                </Card>

                {/* Month 9-12: Event Impact */}
                <Card className="p-6 glass-card-strong glow-border">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-yellow-400" />
                      <h5 className="text-white">Month 9-12</h5>
                    </div>
                    <Badge variant="outline" className="border-yellow-400/40 text-yellow-400">
                      Adjusted
                    </Badge>
                  </div>

                  <div className="mb-6">
                    <div className="text-3xl mb-2 text-yellow-400">
                      ₹{Math.round(finalPremium * 0.95).toLocaleString('en-IN')}
                    </div>
                    <p className="text-xs text-white/60">Minor claim adjustment</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400 mt-0.5" />
                      <p className="text-sm text-white/80">1 minor claim filed</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-green-400 mt-0.5" />
                      <p className="text-sm text-white/80">Continued safe behavior</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <TrendingDown className="w-4 h-4 text-green-400 mt-0.5" />
                      <p className="text-sm text-white/80">Net savings: ₹{(finalPremium - Math.round(finalPremium * 0.95)).toLocaleString('en-IN')}/year</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="mt-8 p-6 glass-card border border-white/20 rounded-2xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="mb-2 text-white">
                      <strong>Timeline Simulation Assumptions:</strong>
                    </p>
                    <ul className="space-y-1 text-sm text-white/70">
                      <li>• Premium adjustments occur quarterly based on behavior data</li>
                      <li>• Claims are processed and reflected in next adjustment cycle</li>
                      <li>• Health and driving scores are updated monthly from connected devices</li>
                      <li>• Seasonal factors (weather, holidays) influence risk calculations</li>
                      <li>• All data is mock/simulated - no real tracking or pricing occurs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Comparison: Traditional vs Personalized vs Dynamic */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <Badge className="mb-4 glass-card border-white/30 text-white">Comparative Analysis</Badge>
                <h2 className="mb-4 text-4xl text-white glow-text-cyan">Pricing Models Compared</h2>
                <p className="text-white/80 max-w-3xl mx-auto">
                  Understand the differences between traditional flat pricing, personalized risk-based pricing,
                  and dynamic behavior-adjusted pricing.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-white/30">
                      <th className="text-left p-4 text-white/80 text-lg">Dimension</th>
                      <th className="text-left p-4 text-white text-lg">Traditional Pricing</th>
                      <th className="text-left p-4 text-white text-lg">Personalized Pricing</th>
                      <th className="text-left p-4 glass-card text-white text-lg">Dynamic Pricing</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-white/20">
                      <td className="p-4 text-white/80">Premium Amount</td>
                      <td className="p-4">
                        <div className="text-white/90">₹15,000/year</div>
                        <div className="text-xs text-white/60">Fixed for all</div>
                      </td>
                      <td className="p-4">
                        <div className="text-white/90">₹{finalPremium.toLocaleString('en-IN')}/year</div>
                        <div className="text-xs text-white/60">Risk-adjusted</div>
                      </td>
                      <td className="p-4 glass-card">
                        <div className="text-white">₹{Math.round(finalPremium * 0.95).toLocaleString('en-IN')}/year</div>
                        <div className="text-xs text-green-400">Behavior-optimized</div>
                      </td>
                    </tr>

                    <tr className="border-b border-white/20">
                      <td className="p-4 text-white/80">Risk Sensitivity</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <XCircle className="w-4 h-4 text-red-400" />
                          <span className="text-white/90">Not sensitive</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-yellow-400" />
                          <span className="text-white/90">Initial assessment</span>
                        </div>
                      </td>
                      <td className="p-4 glass-card">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400" />
                          <span className="text-white">Continuous monitoring</span>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-white/20">
                      <td className="p-4 text-white/80">Time Variation</td>
                      <td className="p-4 text-white/90">Annual renewal only</td>
                      <td className="p-4 text-white/90">Annual renewal</td>
                      <td className="p-4 glass-card text-white">Quarterly adjustments</td>
                    </tr>

                    <tr className="border-b border-white/20">
                      <td className="p-4 text-white/80">Data Inputs</td>
                      <td className="p-4 text-white/90">Age, gender, location</td>
                      <td className="p-4 text-white/90">+ Health, driving, claims</td>
                      <td className="p-4 glass-card text-white">+ Real-time behavior data</td>
                    </tr>

                    <tr className="border-b border-white/20">
                      <td className="p-4 text-white/80">Fairness</td>
                      <td className="p-4">
                        <div className="text-yellow-400">Low-risk subsidize high-risk</div>
                      </td>
                      <td className="p-4">
                        <div className="text-green-400">Risk-proportional</div>
                      </td>
                      <td className="p-4 glass-card">
                        <div className="text-green-400">Behavior-rewarding</div>
                      </td>
                    </tr>

                    <tr className="border-b border-white/20">
                      <td className="p-4 text-white/80">Transparency</td>
                      <td className="p-4">
                        <Star className="w-5 h-5 text-white/30" />
                      </td>
                      <td className="p-4">
                        <div className="flex gap-1">
                          <Star className="w-5 h-5 text-white/70" />
                          <Star className="w-5 h-5 text-white/70" />
                        </div>
                      </td>
                      <td className="p-4 glass-card">
                        <div className="flex gap-1">
                          <Star className="w-5 h-5 text-white" />
                          <Star className="w-5 h-5 text-white" />
                          <Star className="w-5 h-5 text-white" />
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="p-4 text-white/80">Incentive for Safety</td>
                      <td className="p-4">
                        <XCircle className="w-5 h-5 text-red-400" />
                      </td>
                      <td className="p-4">
                        <CheckCircle className="w-5 h-5 text-yellow-400" />
                      </td>
                      <td className="p-4 glass-card">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* AI Policy Recommendations */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-full mb-6">
                  <Zap className="w-4 h-4 text-[#39FF14]" />
                  <span className="text-[#39FF14] text-sm font-medium">AI-Powered Analysis</span>
                </div>
                <h2 className="mb-4 text-4xl text-white glow-text">Recommended Policies Based on Your Profile</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                  Our AI has analyzed your risk profile and compared it against 500+ insurance products from leading
                  providers to find the best matches for your needs and budget.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* ICICI Lombard Card */}
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Award className="w-5 h-5 text-white" />
                        <span className="text-white text-sm font-medium">Best Match</span>
                      </div>
                      <h3 className="text-xl text-white font-semibold">ICICI Lombard</h3>
                      <p className="text-white/60 text-sm">Comprehensive Motor Insurance</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex gap-0.5 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      </div>
                      <span className="text-white/60 text-xs">98% Match</span>
                    </div>
                  </div>

                  {/* Coverage Details Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">IDV Cover</div>
                      <div className="text-white font-semibold text-sm">₹8.5 Lakh</div>
                      <div className="text-white/50 text-xs">Max: 15 yrs</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">Claim Settled</div>
                      <div className="text-[#39FF14] font-semibold text-sm">99.1%</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">Premium</div>
                      <div className="text-white font-semibold text-sm">₹8,450</div>
                      <div className="text-white/50 text-xs">/year</div>
                    </div>
                  </div>

                  {/* Savings Banner */}
                  <div className="mb-4 p-3 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-lg text-center">
                    <div className="text-[#39FF14] text-sm font-semibold">Buy Online & Save ₹3.2K</div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Free roadside assistance up to ₹5,000</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Zero depreciation cover included</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">₹15 Lakh immediate payout on total loss</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Option to delay 12 months premium</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Extend your policy at maturity</span>
                    </div>
                  </div>

                  {/* Additional Benefits */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-md">
                      <span className="text-orange-400 text-xs">💰</span>
                      <span className="text-orange-300 text-xs font-medium">Full refund of premium</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-500/10 border border-green-500/30 rounded-md">
                      <span className="text-green-400 text-xs">🎯</span>
                      <span className="text-green-300 text-xs font-medium">Upto 15% discount included</span>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                    Check Premium
                  </Button>
                </div>

                {/* HDFC ERGO Card */}
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Shield className="w-5 h-5 text-white/70" />
                        <span className="text-white/70 text-sm font-medium">Top Rated</span>
                      </div>
                      <h3 className="text-xl text-white font-semibold">HDFC ERGO</h3>
                      <p className="text-white/60 text-sm">Motor Secure Plus Plan</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex gap-0.5 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-white/30" />
                      </div>
                      <span className="text-white/60 text-xs">94% Match</span>
                    </div>
                  </div>

                  {/* Coverage Details Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">IDV Cover</div>
                      <div className="text-white font-semibold text-sm">₹9 Lakh</div>
                      <div className="text-white/50 text-xs">Max: 20 yrs</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">Claim Settled</div>
                      <div className="text-[#39FF14] font-semibold text-sm">99.3%</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">Premium</div>
                      <div className="text-white font-semibold text-sm">₹9,200</div>
                      <div className="text-white/50 text-xs">/year</div>
                    </div>
                  </div>

                  {/* Savings Banner */}
                  <div className="mb-4 p-3 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-lg text-center">
                    <div className="text-[#39FF14] text-sm font-semibold">Buy Online & Save ₹2.5K</div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">100% payout on total loss</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Return to invoice cover available</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Engine & gearbox protection</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Option to delay 12 months premium</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">NCB protection for claim-free years</span>
                    </div>
                  </div>

                  {/* Additional Benefits */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-md">
                      <span className="text-orange-400 text-xs">💰</span>
                      <span className="text-orange-300 text-xs font-medium">Full refund of premium</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-500/10 border border-green-500/30 rounded-md">
                      <span className="text-green-400 text-xs">🎯</span>
                      <span className="text-green-300 text-xs font-medium">Upto 15% discount included</span>
                    </div>
                  </div>

                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold">
                    Check Premium
                  </Button>
                </div>

                {/* Bajaj Allianz Card */}
                <div className="glass-card border border-white/20 rounded-2xl p-6 hover:border-[#39FF14]/50 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-white/70" />
                        <span className="text-white/70 text-sm font-medium">Value Pick</span>
                      </div>
                      <h3 className="text-xl text-white font-semibold">Bajaj Allianz</h3>
                      <p className="text-white/60 text-sm">Smart Drive Insurance</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex gap-0.5 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <Star className="w-4 h-4 text-white/30" />
                      </div>
                      <span className="text-white/60 text-xs">92% Match</span>
                    </div>
                  </div>

                  {/* Coverage Details Grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">IDV Cover</div>
                      <div className="text-white font-semibold text-sm">₹7.8 Lakh</div>
                      <div className="text-white/50 text-xs">Max: 18 yrs</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">Claim Settled</div>
                      <div className="text-[#39FF14] font-semibold text-sm">98.8%</div>
                    </div>
                    <div className="bg-black/40 p-3 rounded-lg border border-white/10">
                      <div className="text-white/60 text-xs mb-1">Premium</div>
                      <div className="text-white font-semibold text-sm">₹7,850</div>
                      <div className="text-white/50 text-xs">/year</div>
                    </div>
                  </div>

                  {/* Savings Banner */}
                  <div className="mb-4 p-3 bg-[#39FF14]/10 border border-[#39FF14]/30 rounded-lg text-center">
                    <div className="text-[#39FF14] text-sm font-semibold">Buy Online & Save ₹3.8K</div>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Free health benefits up to ₹25,000</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Pay-as-you-drive flexible model</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Telematics-based dynamic pricing</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Instant claim registration via app</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">Waiver of premium on total loss</span>
                    </div>
                  </div>

                  {/* Additional Benefits */}
                  <div className="flex gap-2 mb-4 flex-wrap">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-orange-500/10 border border-orange-500/30 rounded-md">
                      <span className="text-orange-400 text-xs">💰</span>
                      <span className="text-orange-300 text-xs font-medium">Full refund of premium</span>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5 bg-green-500/10 border border-green-500/30 rounded-md">
                      <span className="text-green-400 text-xs">🎯</span>
                      <span className="text-green-300 text-xs font-medium">Upto 15% discount included</span>
                    </div>
                  </div>

                  <Button className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold">
                    Check Premium
                  </Button>
                </div>
              </div>

              {/* Additional Recommendations */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* SBI General */}
                <div className="glass-card border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#39FF14]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <Shield className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">SBI General Insurance</h4>
                      <p className="text-white/60 text-sm mb-2">Comprehensive Car Insurance</p>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-white/30" />
                        </div>
                        <span className="text-white/60 text-xs">89% Match</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex flex-col items-end mb-2">
                      <div className="text-white/60 text-xs mb-1">Claim Settled: <span className="text-[#39FF14] font-semibold">99.4%</span></div>
                      <div className="text-2xl text-white font-bold">₹9,650</div>
                      <div className="text-white/60 text-sm">/year</div>
                    </div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-green-400 text-xs">🎯</span>
                      <span className="text-green-300 text-xs">Upto 15% discount</span>
                    </div>
                    <Button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1.5">
                      View Details
                    </Button>
                  </div>
                </div>

                {/* Tata AIG */}
                <div className="glass-card border border-white/10 rounded-xl p-5 flex items-center justify-between hover:border-[#39FF14]/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <Car className="w-6 h-6 text-white/70" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Tata AIG Insurance</h4>
                      <p className="text-white/60 text-sm mb-2">iDrive Smart Motor Plan</p>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-0.5">
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          <Star className="w-3 h-3 text-white/30" />
                        </div>
                        <span className="text-white/60 text-xs">87% Match</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex flex-col items-end mb-2">
                      <div className="text-white/60 text-xs mb-1">Claim Settled: <span className="text-[#39FF14] font-semibold">99.41%</span></div>
                      <div className="text-2xl text-white font-bold">₹8,990</div>
                      <div className="text-white/60 text-sm">/year</div>
                    </div>
                    <div className="flex items-center gap-1.5 mb-2">
                      <span className="text-green-400 text-xs">🎯</span>
                      <span className="text-green-300 text-xs">Upto 15% discount</span>
                    </div>
                    <Button className="bg-white/10 hover:bg-white/20 text-white text-sm px-4 py-1.5">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* AI Analysis Note */}
              <div className="mt-8 p-6 glass-card border border-[#39FF14]/20 rounded-xl">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#39FF14] mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">How We Calculate Your Recommendations</h4>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Our AI analyzes your driving profile, risk score, vehicle details, location, and behavioral
                      patterns against our database of 500+ insurance products. The match percentage considers
                      coverage adequacy, premium affordability, claim settlement ratio, customer reviews, and
                      specific features that align with your needs. Prices shown are estimates based on your
                      simulator inputs—final premiums may vary based on comprehensive underwriting and vehicle
                      inspection. All recommendations are unbiased and not influenced by commission structures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Educational Content - How It Works */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-4xl text-white glow-text-purple">How Personalized Pricing Works</h2>
                <p className="text-white/80 max-w-3xl mx-auto">
                  Understanding the technology and data behind modern insurance pricing
                </p>
              </div>

              <Tabs defaultValue="personalization" className="w-full">
                <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 glass-card border border-white/20">
                  <TabsTrigger value="personalization" className="text-white/90">Personalization</TabsTrigger>
                  <TabsTrigger value="dynamic" className="text-white/90">Dynamic Adjustment</TabsTrigger>
                  <TabsTrigger value="privacy" className="text-white/90">Privacy & Ethics</TabsTrigger>
                </TabsList>

                <TabsContent value="personalization" className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 glass-card-strong">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="mb-3 text-white text-xl">Demographic Indicators</h4>
                      <p className="text-white/80 mb-4">
                        Age, gender, occupation, and location form the foundation of risk assessment.
                        Statistical data shows different risk profiles across demographic groups.
                      </p>
                      <div className="space-y-2 text-sm text-white/70">
                        <div>• Age: Younger drivers have 3x higher accident rates</div>
                        <div>• Location: Urban areas have 2x higher claim frequency</div>
                        <div>• Occupation: Profession influences health and accident risk</div>
                      </div>
                    </Card>

                    <Card className="p-6 glass-card-strong">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Activity className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="mb-3 text-white text-xl">Behavioral Factors</h4>
                      <p className="text-white/80 mb-4">
                        Health metrics, fitness activities, and lifestyle choices provide deeper insight
                        into individual risk beyond demographics.
                      </p>
                      <div className="space-y-2 text-sm text-white/70">
                        <div>• Fitness: Regular exercise reduces health claims by 25%</div>
                        <div>• Sleep: Poor sleep increases accident risk</div>
                        <div>• Habits: Smoking, alcohol affect life expectancy</div>
                      </div>
                    </Card>

                    <Card className="p-6 glass-card-strong">
                      <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Gauge className="w-6 h-6 text-green-400" />
                      </div>
                      <h4 className="mb-3 text-white text-xl">Usage Metrics</h4>
                      <p className="text-white/80 mb-4">
                        How you use your vehicle, home, or health services directly correlates with
                        claim probability and severity.
                      </p>
                      <div className="space-y-2 text-sm text-white/70">
                        <div>• Mileage: More driving = more exposure to accidents</div>
                        <div>• Time of day: Night driving increases risk by 60%</div>
                        <div>• Route type: Highway vs city affects risk profile</div>
                      </div>
                    </Card>

                    <Card className="p-6 glass-card-strong">
                      <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                        <Shield className="w-6 h-6 text-orange-400" />
                      </div>
                      <h4 className="mb-3 text-white text-xl">Contextual Risk</h4>
                      <p className="text-white/80 mb-4">
                        External factors like weather, crime rates, and environmental conditions
                        modify your risk profile dynamically.
                      </p>
                      <div className="space-y-2 text-sm text-white/70">
                        <div>• Weather: Monsoon increases accident claims by 40%</div>
                        <div>• Crime: High-crime areas affect home/auto insurance</div>
                        <div>• Natural disasters: Flood/earthquake zones</div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="dynamic" className="mt-8">
                  <div className="space-y-6">
                    <Card className="p-6 glass-card-strong">
                      <h4 className="mb-4 text-white text-xl">Real-Time Adjustment Triggers</h4>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <TrendingUp className="w-5 h-5 text-green-400" />
                            <h5 className="text-base text-white">Usage Change</h5>
                          </div>
                          <p className="text-sm text-white/70 mb-3">
                            Your premium adjusts when usage patterns change significantly.
                          </p>
                          <div className="space-y-2 text-xs text-white/60">
                            <div>• Mileage reduction triggers discount</div>
                            <div>• Work-from-home = less commute risk</div>
                            <div>• Gym membership = health improvement</div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <Activity className="w-5 h-5 text-blue-400" />
                            <h5 className="text-base text-white">Behavior Change</h5>
                          </div>
                          <p className="text-sm text-white/70 mb-3">
                            Improved safety behavior results in premium reductions.
                          </p>
                          <div className="space-y-2 text-xs text-white/60">
                            <div>• Safe driving score improvements</div>
                            <div>• Health metrics enhancement</div>
                            <div>• Claim-free periods rewarded</div>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center gap-2 mb-3">
                            <AlertCircle className="w-5 h-5 text-yellow-400" />
                            <h5 className="text-base text-white">External Events</h5>
                          </div>
                          <p className="text-sm text-white/70 mb-3">
                            External risk factors influence pricing dynamically.
                          </p>
                          <div className="space-y-2 text-xs text-white/60">
                            <div>• Natural disaster proximity</div>
                            <div>• Pandemic health risks</div>
                            <div>• Economic market changes</div>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 glass-card-strong">
                      <h4 className="mb-4 text-white text-xl">Before & After Premium Comparison</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                          <div className="flex items-center gap-2 mb-3">
                            <XCircle className="w-5 h-5 text-red-400" />
                            <h5 className="text-base text-white">Before: Risky Behavior</h5>
                          </div>
                          <div className="text-3xl mb-4 text-red-400">₹18,000/year</div>
                          <div className="space-y-2 text-sm text-white/70">
                            <div>• Low driving score (60/100)</div>
                            <div>• High mileage (2000 km/month)</div>
                            <div>• 2 claims in past year</div>
                            <div>• Sedentary lifestyle</div>
                          </div>
                        </div>

                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                          <div className="flex items-center gap-2 mb-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <h5 className="text-base text-white">After: Safe Behavior</h5>
                          </div>
                          <div className="text-3xl mb-4 text-green-400">₹11,000/year</div>
                          <div className="space-y-2 text-sm text-white/70">
                            <div>• High driving score (90/100)</div>
                            <div>• Low mileage (400 km/month)</div>
                            <div>• Claim-free for 12 months</div>
                            <div>• Active fitness tracking</div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-center">
                        <p className="text-green-400 text-xl">
                          <strong>Savings: ₹7,000/year (39% reduction)</strong> by improving behavior
                        </p>
                      </div>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="privacy" className="mt-8">
                  <div className="space-y-6">
                    <Card className="p-6 glass-card-strong">
                      <h4 className="mb-4 text-white text-xl">Data Privacy & Protection</h4>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="text-base mb-3 text-green-400">What We Do ✓</h5>
                          <div className="space-y-3 text-sm text-white/70">
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                              <span>Encrypt all personal data end-to-end</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                              <span>Allow users to control data sharing preferences</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                              <span>Provide transparent pricing calculations</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                              <span>Comply with data protection regulations (GDPR, etc.)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5" />
                              <span>Anonymize data for actuarial analysis</span>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h5 className="text-base mb-3 text-red-400">What We Don't Do ✗</h5>
                          <div className="space-y-3 text-sm text-white/70">
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5" />
                              <span>Sell your data to third parties</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5" />
                              <span>Use data for non-insurance purposes</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5" />
                              <span>Track location without explicit consent</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5" />
                              <span>Discriminate based on protected characteristics</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-400 mt-0.5" />
                              <span>Retain data beyond policy period</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 glass-card-strong">
                      <h4 className="mb-4 text-white text-xl">Ethical Considerations</h4>
                      <div className="space-y-4 text-white/70">
                        <div>
                          <h5 className="text-base mb-2 text-white">Fairness & Non-Discrimination</h5>
                          <p className="text-sm">
                            Personalized pricing must not perpetuate discrimination. We ensure that pricing factors
                            are actuarially justified and do not unfairly target protected groups.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-base mb-2 text-white">Transparency & Explainability</h5>
                          <p className="text-sm">
                            Customers have the right to understand how their premium is calculated. We provide
                            detailed breakdowns and allow customers to challenge automated decisions.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-base mb-2 text-white">Data Minimization</h5>
                          <p className="text-sm">
                            We only collect data that is necessary for risk assessment. Customers can opt-out
                            of certain data collection practices while maintaining basic coverage.
                          </p>
                        </div>
                        <div>
                          <h5 className="text-base mb-2 text-white">Regulatory Compliance</h5>
                          <p className="text-sm">
                            All pricing models are subject to regulatory approval and regular audits to ensure
                            compliance with insurance laws and consumer protection regulations.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-4xl text-white glow-text">Frequently Asked Questions</h2>
                <p className="text-white/80">
                  Common questions about personalized and dynamic insurance pricing
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="faq-1" className="glass-card border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-white/80">
                    How is my premium calculated?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Your premium is calculated using a combination of demographic factors (age, location),
                    behavioral data (driving habits, health metrics), usage patterns (mileage, time of day),
                    and contextual risk factors (weather, crime rates). Each factor is weighted based on
                    actuarial data and adjusted dynamically based on your ongoing behavior.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2" className="glass-card border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-white/80">
                    What data do you collect?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    For motor insurance, we may collect GPS location, speed, acceleration, and braking data
                    via telematics devices. For health insurance, we may integrate with fitness trackers to
                    monitor activity levels and vital signs. All data collection requires explicit consent
                    and you can opt-out at any time.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3" className="glass-card border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-white/80">
                    How often does my premium change?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    With dynamic pricing, your premium is reviewed quarterly. Significant changes in your
                    behavior or risk profile trigger adjustments. You'll always receive advance notification
                    before any premium change takes effect, giving you time to review and adjust.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4" className="glass-card border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-white/80">
                    Can I opt-out of personalized pricing?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes, you can always choose traditional flat-rate pricing instead. However, personalized
                    pricing typically offers significant savings for low-risk customers. You can switch
                    between pricing models during renewal periods.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5" className="glass-card border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-white/80">
                    Is my data secure?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    Yes, all personal data is encrypted end-to-end and stored in compliance with GDPR and
                    local data protection laws. We never sell your data to third parties and use it exclusively
                    for insurance risk assessment and pricing.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-6" className="glass-card border border-white/20 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-white/80">
                    What if I disagree with my risk score?
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70">
                    You have the right to challenge any automated decision. Contact our customer service team
                    to request a manual review of your risk assessment. We'll provide a detailed explanation
                    and allow you to submit additional evidence for consideration.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="glass-card-strong p-12 rounded-2xl glow-border-purple">
                <h2 className="mb-4 text-4xl text-white glow-text">Interested in Learning More?</h2>
                <p className="text-xl text-white/80 mb-8">
                  This is a simulation for educational purposes. Actual personalized pricing implementation
                  would require regulatory approval, actuarial validation, and comprehensive data protection measures.
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button className="glass-button glow-button-blue">
                    <Shield className="w-5 h-5 mr-2" />
                    View Real Products
                  </Button>
                  <Button variant="outline" className="glass-button border-white/30 text-white hover:bg-white/10">
                    <Info className="w-5 h-5 mr-2" />
                    Contact Us
                  </Button>
                </div>
                <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                  <p className="text-sm text-yellow-200">
                    <strong>Remember:</strong> This demonstration uses mock data and simulated calculations.
                    No actual pricing or data collection occurs on this page.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQs */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="mb-4 text-white">Frequently Asked Questions</h2>
                <p className="text-white/80">
                  Common questions about personalized and dynamic insurance pricing
                </p>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="faq-1" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">What is personalized insurance pricing?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Personalized insurance pricing uses individual risk factors—such as health metrics,
                    driving behavior, and usage patterns—to calculate a premium tailored to you, rather
                    than using broad demographic averages. This means safer drivers and healthier individuals
                    can pay less than they would under traditional pricing. The AI analyzes over 200+ data
                    points including your driving patterns, health indicators, lifestyle choices, and environmental
                    factors to create a precise risk profile that ensures you only pay for the risk you actually present.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">How does dynamic pricing differ from personalized pricing?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Personalized pricing assesses your risk at policy inception. Dynamic pricing goes further
                    by continuously monitoring your behavior and adjusting your premium in real-time or at
                    regular intervals (monthly, quarterly). If you improve your driving score or health metrics,
                    your premium can decrease during the policy period. Our advanced AI algorithms process data
                    from IoT devices, telematics, wearables, and smart home sensors to provide you with instant
                    feedback and premium adjustments. Safe drivers can save up to 40% annually, and healthy
                    individuals can see reductions of 25-35% on health and life insurance premiums through
                    consistent positive behavior patterns.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">What data is used for pricing calculations?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Common data points include: demographics (age, location), behavioral factors (fitness activity,
                    sleep patterns), usage metrics (driving mileage, speed, braking patterns), claim history,
                    and contextual factors (weather, crime rates). All data collection requires explicit consent
                    and is protected by privacy regulations. Our AI-powered system analyzes telematics data
                    (acceleration, braking, cornering, time of day), health metrics (heart rate, step count,
                    sleep quality, BMI), property data (security systems, maintenance records, smart home devices),
                    and real-time environmental data (weather patterns, traffic conditions, neighborhood safety scores).
                    We use blockchain technology to ensure data integrity and give you full control over what data
                    you share and with whom.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">Can my premium increase during the policy period?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    In dynamic pricing models, premiums can adjust both up and down based on behavior changes.
                    However, many insurers cap the maximum increase and provide advance notice. Some policies
                    guarantee that improved behavior can only lower premiums, never raise them mid-term. Most
                    providers cap increases at 15% per quarter and 30% annually to protect customers from sudden
                    shocks. You'll receive 30-day advance notifications before any premium adjustment, along with
                    detailed explanations of the factors driving the change. Our AI provides personalized coaching
                    and recommendations to help you maintain or improve your risk score, with real-time alerts when
                    behaviors might negatively impact your premium.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">Is my personal data secure?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Reputable insurers use end-to-end encryption, comply with data protection regulations
                    (GDPR, CCPA), and never sell personal data to third parties. You have the right to access,
                    correct, and delete your data. Data is anonymized for aggregate analysis and actuarial modeling.
                    All data is encrypted using military-grade AES-256 encryption both in transit and at rest.
                    We implement zero-knowledge architecture, meaning even our staff cannot access your raw data
                    without your explicit permission. You have a comprehensive privacy dashboard where you can view,
                    export, modify, or delete your data at any time. Third-party security audits are conducted
                    quarterly, and we maintain SOC 2 Type II and ISO 27001 certifications. Our AI models are trained
                    on anonymized, aggregated datasets that cannot be reverse-engineered to identify individuals.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-6" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">Can I opt out of personalized pricing?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Yes. Personalized pricing is always opt-in. You can choose traditional flat-rate pricing
                    if you prefer not to share behavioral data. Some insurers also offer hybrid models where
                    you share limited data for partial discounts. You can switch between pricing models at any
                    renewal period without penalties. Our hybrid "Lite" model allows you to share only driving
                    distance and general location data for 10-15% discounts without full telematics tracking.
                    The "Standard" model includes basic telematics for 15-25% savings, while the "Premium" model
                    with comprehensive data sharing can yield 25-40% discounts for low-risk profiles. You maintain
                    full control and can adjust your data-sharing preferences quarterly through your online dashboard.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-7" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">How accurate are the pricing calculations?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Personalized pricing uses actuarial models trained on millions of data points and refined
                    by machine learning. While no model is perfect, studies show personalized pricing correlates
                    more closely with actual claim risk than traditional pricing, leading to fairer premiums
                    for low-risk individuals. Our AI models are trained on over 50 million policy records and
                    10 billion behavioral data points, achieving 92% accuracy in risk prediction compared to
                    65-70% for traditional actuarial models. The system continuously learns and adapts, with
                    model performance improving by 3-5% annually. Independent studies show that personalized
                    pricing reduces adverse selection by 35%, improves customer satisfaction by 28%, and decreases
                    overall claim frequency by 18% due to behavioral incentives for safer practices.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-8" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">What devices track my behavior?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Common devices include: telematics devices in vehicles (OBD-II dongles or smartphone apps),
                    fitness wearables (smartwatches, fitness bands), smart home sensors, and connected health
                    devices. All require your explicit consent to install and share data. Popular compatible
                    devices include smartphone apps (iOS/Android), plug-in OBD-II devices, built-in vehicle
                    telematics systems, fitness trackers (Apple Watch, Fitbit, Garmin, Samsung Galaxy Watch),
                    smart home hubs (Ring, Nest, SimpliSafe), and health monitoring devices (blood pressure
                    monitors, glucose meters, sleep trackers). Most customers prefer the smartphone app option
                    as it requires no additional hardware and provides real-time feedback on driving behavior,
                    gamified challenges, and instant premium updates.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-9" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">Will I be penalized for occasional bad behavior?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    Most dynamic pricing models look at trends and averages, not isolated incidents. One instance
                    of hard braking or a late-night drive won't significantly impact your premium. The algorithms
                    focus on consistent patterns over time. Our AI uses a rolling 90-day average for most metrics,
                    filtering out statistical outliers and one-time events. Emergency situations (sudden braking to
                    avoid accidents, late-night hospital visits) are automatically detected and excluded from
                    scoring. The system rewards long-term positive trends rather than punishing occasional lapses.
                    You'd need consistent negative patterns over 4-6 weeks before seeing meaningful premium impacts.
                    Additionally, our "Grace Events" feature allows 3 automatic exclusions per quarter for unusual
                    behaviors that you can flag for review.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-10" className="bg-white/5 border border-white/10 rounded-xl px-6">
                  <AccordionTrigger className="text-white hover:text-[#39FF14]">Is this simulator accurate to real pricing?</AccordionTrigger>
                  <AccordionContent className="text-white/80">
                    This simulator demonstrates the concept and methodology of personalized pricing but uses
                    simplified calculations. Real insurance pricing involves complex actuarial models, regulatory
                    compliance, underwriting approval, and many more variables. Actual premiums will vary. This
                    educational tool uses representative algorithms based on industry standards but simplified
                    for demonstration. Real-world pricing includes state-specific regulations, carrier-specific
                    underwriting guidelines, credit scoring (where permitted), detailed claims history analysis,
                    medical underwriting, property inspections, and numerous other factors. The simulator provides
                    directionally accurate insights into how personalized pricing works but should not be used for
                    actual financial planning. For binding quotes, please consult with our licensed insurance
                    advisors who can access real-time carrier pricing engines.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>

          {/* Footer CTA */}
          <section className="py-16 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-4">Ready to Explore Real Insurance Options?</h2>
              <p className="text-white/60 mb-8">
                This simulation demonstrates how personalized pricing works. For actual insurance quotes
                and policies, browse our comprehensive insurance marketplace.
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-white/10 hover:bg-white/20 border border-white/20">
                  View Insurance Products
                </Button>
                <Button variant="outline" className="border-white/20 hover:bg-white/5">
                  Contact Sales Team
                </Button>
              </div>

              <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="flex items-start gap-3 text-left">
                  <Info className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div className="text-sm text-white/60">
                    <strong className="text-white">Disclaimer:</strong> This personalized insurance
                    dynamic pricing simulator is for educational purposes only. All data, calculations,
                    and pricing shown are simulated and not binding. No real insurance pricing, data
                    collection, or transactions occur. Actual insurance pricing requires underwriting
                    approval, regulatory compliance, and formal policy issuance by a licensed insurer.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
