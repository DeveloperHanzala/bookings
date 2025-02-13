import React, { useState, useEffect } from "react";
import axios from "axios";
import './Assessments.css'
import HouseTypes from "./Second/HouseTypes";
import Age from "./Second/Age";
import Age1 from "./Second/Age1";
import TypeofRating from "./Second/TypeofRating";
import WallConstruction from "./Second/WallConstruction";
import Roof from "./Second/Roof";
import Ground from "./Second/Ground";
import FloorArea from "./Second/FloorArea";
import Opening from "./Second/Step2/Opening";
import Roomdata from "./Second/Step2/Roomdata";
import Ventilation from "./Second/Step2/Ventilation";
import LightingSummary from "./Second/Step2/LightingSummary";
import PrimaryS from "./Second/Step3/PrimaryS";
import SecondaryS from "./Second/Step3/SecondaryS";
import PrimaryF from "./Second/Step3/PrimaryF";
import SecondaryF from "./Second/Step3/SecondaryF";
import GOLBoiler from "./Second/Step3/GOLBoiler";
import SFboiler from "./Second/Step3/SFboiler";
import Comments from "./Second/Step3/Comments";
import HeatPumps from "./Second/Step3/HeatPumps";
import ElectricRoom from "./Second/Step3/ElectricRoom";
import CHP from "./Second/Step3/CHP";
import PrimaryHWS from "./Second/Step 4/PrimaryHWS";
import SolarHWS from "./Second/Step 4/SolarHWS";
import ShowersBath from "./Second/Step 4/ShowersBath";
import Commentsstep4 from "./Second/Step 4/Commentsstep4";
import Heatingcontrols from "./Second/Step 5/Heatingcontrols";
import UFH from "./Second/Step 5/UFH";
import DLS from "./Second/Step 6/DLS";
import HeatingS1 from "./Second/Step 6/HeatingS1";
import CommentsStep5 from "./Second/Step 6/CommentsStep5";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdNotifications } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import img from '../Images/download.jpeg';
import submit from '../Images/Submit.png';
import { useParams } from "react-router-dom";
import Age2 from "./Second/Age2";
import WallConstruction1 from "./Second/WallConstruction1";
import Roof1 from "./Second/Roof1";
import Ground1 from "./Second/Ground1";
import WallConstruction3 from "./WallConstruction3";
import Roof3 from "./Roof3";
import Ground3 from "./Second/Ground3";
import WallConstruction4 from "./WallConstruction4";
import Roof4 from "./Second/Roof4";
import Ground4 from "./Second/Ground4";
import Step7_form from "./Second/Step7/Step7_form";
const Assessmentsone = () => {
    const { id } = useParams();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 8));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));
  const handleSubmit = () => {
    console.log("Form submitted");
    // Add your submission logic here
  };

  
  
  const [formData, setFormData] = useState({
    assessor_name: "",
    ber_reg_no: "",
    survey_date: "",
    num_storeys: null,
    num_bedrooms: null,
  num_extensions: "0",
  type_2_thickness: null,
    property_address: "",
    eircode: "",
    mprn: "",
    DetachedHouse: false,
    semiDetached: false,
    endOfTerrace: false,
    midTerrace: false,
    groundFloorApartment: false,
    midFloorApartment: false,
    topFloorApartment: false,
    basementApartment: false,
    maisonette: false,
    pre_1900: false,
    between_1900_and_1929: false,
    between_1930_and_1949: false,
    between_1950_and_1966: false,
    between_1967_and_1977: false,
    between_1978_and_1982: false,
    between_1983_and_1993: false,
    between_1994_and_1999: false,
    from_2000_onwards: false,
    xpre_1900: false,
    xbetween_1900_and_1929: false,
    xbetween_1930_and_1949: false,
    xbetween_1950_and_1966: false,
    xbetween_1967_and_1977: false,
    xbetween_1978_and_1982: false,
    xbetween_1983_and_1993: false,
    xbetween_1994_and_1999: false,
    xfrom_2000_onwards: false,
    xxpre: false,
    xxbetween_1900_and_1929: false,
    xxbetween_1930_and_1949: false,
    xxbetween_1950_and_1966: false,
    xxbetween_1967_and_1977: false,
    xxbetween_1978_and_1982: false,
    xxbetween_1983_and_1993: false,
    xxbetween_1994_and_1999: false,
    xxfrom_2000_onwards: false,
    new_final_dwelling: false,
    existing_dwelling: false,
    new_owner_occupation: false,
    sale: false,
    private_letting: false,
    social_housing_letting: false,
    grant_support: false,
    major_renovation: false,
    purpose_of_rating_other: false,
    stone: false,
    solid_brick: false,
    cavity: false,
    solid_concrete: false,
    hollow_block: false,
    timber_frame: false,
    other_unknown: false,
    other_unknow_text: "",
    insulation_thickness_observable: null,
    pitched_insulation_btw_joists: false,
    pitched_insulation_in_rafters: false,
    Flat_insulation_integral: false,
    room_in_roof: false,
    no_heat_loss_roof: false,
    roof_Construction_Other: false,
    roof_Construction_Other_text: null,
    thinkness: null,
    roof_construction_unknown: null,
    fibre: false,
    warmcell: false,
    eps: false,
    dense: false,
    solid: false,
    suspended: false,
    above_unheated_basement: false,
    heated_basement: false,
    no_heat_loss_ground_floor: false,
    sealed: false,
    ground_Floor_Dwelling_other: false,
    floor_insulation: null,  // assuming this will hold a value like "EPS", "Unknown", etc.
    ground_Floor_insulation_none: false,
    Ground_Floor_Construction_Main_Dwelling_eps: false,
    Ground_Floor_Construction_Main_Dwelling_min_fibre: false,
    Ground_Floor_Construction_Main_Dwelling_dense: false,
    Ground_Floor_Construction_Main_Dwelling_unknow: false,
    type_2_stone: false,
  Type_2_solid_brick: false,
  type_2_cavity: false,
  type_2_solid_concrete: false,
  type_2_hollow_block: false,
  type_2_timber_frame: false,
  type_2_other_unknown: false,
  type_2_insulation_thickness_observable: "",
  type_2_other_text: "",
  type_2_pitched_insulation_btw_joists: false,
  type_2_pitched_insulation_in_rafters: false,
  type_2_Flat_insulation_integral: false,
  type_2_room_in_roof: false,
  type_2_no_heat_loss_roof: false,
  type_2_roof_Construction_Other: false,
  type_2_roof_Construction_Other_text: null,
 
  type_2_roof_construction_unknown: "",
  type_2_fibre: false,
  type_2_warmcell: false,
  type_2_eps: false,
  type_2_dense: false,
     type_2_solid : false,
     type_2_suspended : false,
     type_2_above_unheated_basement : false,
     type_2_heated_basement : false,
     type_2_no_heat_loss_ground_floor : false,
     type_2_sealed : false,
     type_2_ground_Floor_Dwelling_other : false,
     type_2_floor_insulation : null,
     type_2_ground_Floor_insulation_none : false,
     type_2_ground_floor_construction_main_dwelling_eps : false,
     type_2_ground_floor_construction_main_dwelling_min_fibre : false,
     type_2_ground_floor_construction_main_dwelling_dense : false,
     type_2_ground_floor_construction_main_dwelling_unknow : false,
     type_3_stone: false,
     Type_3_solid_brick: false,
     type_3_cavity: false,
     type_3_solid_concrete: false,
     type_3_hollow_block: false,
     type_3_timber_frame: false,
     type_3_ther_unknown: false,
     type_3_insulation_thickness_observable: "", // Empty string or default value
     type_3_ther_unknown_text: "", // Empty string or default value
     type_3_insulation_thickness_observable: null,
     type_3_pitched_insulation_btw_joists: false,
     type_3_pitched_insulation_in_rafters: false,
     type_3_Flat_insulation_integral: false,
     type_3_room_in_roof: false,
     type_3_no_heat_loss_roof: false,
     type_3_roof_Construction_Other: false,
     type_3_roof_Construction_Other_text: null,
     type_3_thinkness: null,
     type_3_roof_construction_unknown: null,
     type_3_fibre: false,
     type_3_warmcell: false,
     type_3_eps: false,
     type_3_dense: false,
     type_3_solid: false,
     type_3_suspended: false,
     type_3_above_unheated_basement: false,
     type_3_heated_basement: false,
     type_3_no_heat_loss_ground_floor: false,
     type_3_sealed: false,
     type_3_ground_Floor_Dwelling_other: false,
     type_3_floor_insulation: null,
     type_3_ground_floor_construction_main_dwelling_eps: false,
     type_3_ground_floor_construction_main_dwelling_min_fibre: false,
     type_3_ground_floor_construction_main_dwelling_dense: false,
     type_3_ground_floor_construction_main_dwelling_unknow: false,
     type_3_ground_floor_construction_main_dwelling_none: false,
     type_4_stone: false,
  Type_4_solid_brick: false,
  type_4_cavity: false,
  type_4_solid_concrete: false,
  type_4_hollow_block: false,
  type_4_timber_frame: false,
  type_4_ther_unknown: false,
  type_4_ther_unknown_text: null,
  type_4_insulation_thickness_observable: null,
  type_4_insulation_thickness_observable: null,
  type_4_pitched_insulation_btw_joists: false,
  type_4_pitched_insulation_in_rafters: false,
  type_4_Flat_insulation_integral: false,
  type_4_room_in_roof: false,
  type_4_no_heat_loss_roof: false,
  type_4_roof_Construction_Other: false,
  type_4_roof_Construction_Other_text: null,
  type_4_thinkness: null,
  type_4_roof_construction_unknown: null,
  type_4_fibre: false,
  type_4_warmcell: false,
  type_4_eps: false,
  type_4_dense: false,
  type_4_solid: false,
  type_4_suspended: false,
  type_4_above_unheated_basement: false,
  type_4_heated_basement: false,
  type_4_no_heat_loss_ground_floor: false,
  type_4_sealed: false,
  type_4_ground_Floor_Dwelling_other: false,
  type_4_floor_insulation: null,
  type_4_ground_Floor_insulation_none: false,
  type_4_ground_floor_construction_main_dwelling_eps: false,
  type_4_ground_floor_construction_main_dwelling_min_fibre: false,
  type_4_ground_floor_construction_main_dwelling_dense: false,
  type_4_ground_floor_construction_main_dwelling_unknow: false,
  comments_on_heating_controls: false,
  secondary_heating_manufacturer: false,
  ground_storey_heigh: null,
  ground_total_floor_area: null,
  ground_heatloss_floor_1: null,
  ground_heatloss_floor_2: null,
  ground_heatloss_floor_3: null,
  ground_heatloss_floor_4: null,
  ground_heatloss_perimeter: null,
  ground_heatloss_wall_1: null,
  ground_heatloss_wall_2: null,
  ground_heatloss_wall_3: null,
  ground_heatloss_wall_4: null,
  ground_heatloss_roof_1: null,
  ground_heatloss_roof_2: null,
  ground_heatloss_roof_3: null,
  ground_heatloss_roof_4: null,
  first_storey_heigh: null,
  first_total_floor_area: null,
  first_heatloss_floor_1: null,
  first_heatloss_floor_2: null,
  first_heatloss_floor_3: null,
  first_heatloss_floor_4: null,
  first_heatloss_perimeter: null,
  first_heatloss_wall_1: null,
  first_heatloss_wall_2: null,
  first_heatloss_wall_3: null,
  first_heatloss_wall_4: null,
  first_heatloss_roof_1: null,
  first_heatloss_roof_2: null,
  first_heatloss_roof_3: null,
  first_heatloss_roof_4: null,
  second_storey_heigh: null,
  second_total_floor_area: null,
  second_heatloss_floor_1: null,
  second_heatloss_floor_2: null,
  second_heatloss_floor_3: null,
  second_heatloss_floor_4: null,
  second_heatloss_perimeter: null,
  second_heatloss_wall_1: null,
  second_heatloss_wall_2: null,
  second_heatloss_wall_3: null,
  second_heatloss_wall_4: null,
  second_heatloss_roof_1: null,
  second_heatloss_roof_2: null,
  second_heatloss_roof_3: null,
  second_heatloss_roof_4: null,
  third_storey_heigh: null,
  third_total_floor_area: null,
  third_heatloss_floor_1: null,
  third_heatloss_floor_2: null,
  third_heatloss_floor_3: null,
  third_heatloss_floor_4: null,
  third_heatloss_perimeter: null,
  third_heatloss_wall_1: null,
  third_heatloss_wall_2: null,
  third_heatloss_wall_3: null,
  third_heatloss_wall_4: null,
  third_heatloss_roof_1: null,
  third_heatloss_roof_2: null,
  third_heatloss_roof_3: null,
  third_heatloss_roof_4: null,
  basement_storey_heigh: null,
  basement_total_floor_area: null,
  basement_heatloss_floor_1: null,
  basement_heatloss_floor_2: null,
  basement_heatloss_floor_3: null,
  basement_heatloss_floor_4: null,
  basement_heatloss_perimeter: null,
  basement_heatloss_wall_1: null,
  basement_heatloss_wall_2: null,
  basement_heatloss_wall_3: null,
  basement_heatloss_wall_4: null,
  basement_heatloss_roof_1: null,
  basement_heatloss_roof_2: null,
  basement_heatloss_roof_3: null,
  basement_heatloss_roof_4: null,
  living_area: null,
  room_in_roof_area: null,
  f_type_1: null,
  f_type_2: null,
  f_type_3: null,
  draughts_tripping: null,
  lighting_design: null,
  external_wall_light: false,
  external_wall_med: false,
  external_wall_heavy: false,
  floor_light: false,
  floor_med: false,
  floor_heavy: false,
  separating_wall_light: false,
  separating_wall_med: false,
  separating_wall_heavy: false,
  internal_wall_light: false,
  internal_wall_med: false,
  internal_wall_heavy: false,
  overall_thermall_mass: null,
  room_1_opening: null,
  room_1_opening_dimensions: null,
  room_1_glazing_details: null,
  room_1_frame: null,
  room_1_gap: null,
  room_1_over_shading: null,
  room_1_direction: null,
  room_1_wall_roof_type: null,
  room_1_openable_windows_doors: null,
  room_1_windows_doors: null,
  room_2_opening: null,
  room_2_opening_dimensions: null,
  room_2_glazing_details: null,
  room_2_frame: null,
  room_2_gap: null,
  room_2_over_shading: null,
  room_2_direction: null,
  room_2_wall_roof_type: null,
  room_2_openable_windows_doors: null,
  room_2_windows_doors: null,
  room_3_opening: null,
  room_3_opening_dimensions: null,
  room_3_glazing_details: null,
  room_3_frame: null,
  room_3_gap: null,
  room_3_over_shading: null,
  room_3_direction: null,
  room_3_wall_roof_type: null,
  room_3_openable_windows_doors: null,
  room_3_windows_doors: null,
  room_4_opening: null,
  room_4_opening_dimensions: null,
  room_4_glazing_details: null,
  room_4_frame: null,
  room_4_gap: null,
  room_4_over_shading: null,
  room_4_direction: null,
  room_4_wall_roof_type: null,
  room_4_openable_windows_doors: null,
  room_4_windows_doors: null,
  room_5_opening: null,
  room_5_opening_dimensions: null,
  room_5_glazing_details: null,
  room_5_frame: null,
  room_5_gap: null,
  room_5_over_shading: null,
  room_5_direction: null,
  room_5_wall_roof_type: null,
  room_5_openable_windows_doors: null,
  room_5_windows_doors: null,
  // Room 1
  room_1_chimney_flueless: null,
  room_1_open_flues: null,
  room_1_fans_vents: null,
  room_1_rads_with_or_trvs: null,
  room_1_number_of_fixed_lights: null,
  room_1_type_of_fixed_light: null,
  // Room 2
  room_2_chimney_flueless: null,
  room_2_open_flues: null,
  room_2_fans_vents: null,
  room_2_rads_with_or_trvs: null,
  room_2_number_of_fixed_lights: null,
  room_2_type_of_fixed_light: null,
  // Room 3
  room_3_chimney_flueless: null,
  room_3_open_flues: null,
  room_3_fans_vents: null,
  room_3_rads_with_or_trvs: null,
  room_3_number_of_fixed_lights: null,
  room_3_type_of_fixed_light: null,
  // Room 4
  room_4_chimney_flueless: null,
  room_4_open_flues: null,
  room_4_fans_vents: null,
  room_4_rads_with_or_trvs: null,
  room_4_number_of_fixed_lights: null,
  room_4_type_of_fixed_light: null,
  // Room 5
  room_5_chimney_flueless: null,
  room_5_open_flues: null,
  room_5_fans_vents: null,
  room_5_rads_with_or_trvs: null,
  room_5_number_of_fixed_lights: null,
  room_5_type_of_fixed_light: null,
  draught_lobby_on_main_entrance: null,
  pressure_test_results_available: null,
  if_yes_enter_adjusted_results: null,
  is_there_uninsulated_ductng_on_mvhr: null,
  number_of_sides_sheltered: null,
  pressure_test_resut_reference_number: null,
  natural_ventilation: false,
  positive_input_ventilation_from_loft: false,
  positive_input_ventilation_from_outside: false,
  whole_house_extract_ventilation: false,
  balanced_whole_mechanical_ventilation: false,
  exhaust_air_heat_pump: false,
  air_flow_rate_to_eahp: false,
  linear_flourescent: null,
  led: null,
  hologen_lv: null,
  cfl: null,
  halogen_lamps: null,
  incadescent_unknown: null,
  radiator_system_primary: false,
  storage_heaters_primary: false,
  underfloor_primary: false,
  warm_air_primary: false,
  room_heaters_only_primary: false,
  communtiy_primary: false,
  fan_coil_radiator_primay: false,
  other_primary_heating: false,
  other_primary_heating_text: "",
  radiator_system_secondary: false,
  storage_heaters_secondary: false,
  underfloor_secondary: false,
  warm_air_secondary: false,
  room_heaters_only_secondary: false,
  fan_coil_radiator_secondary: false,
  other_secondary_heating: false, // for the 'other' checkbox
  other_secondary_heating_text: "", 
  main_gas: false,
  housecoal: false,
  bulk_lpg: false,
  anthracite: false,
  bottled_lpg: false,
  smokeless: false,
  heating_oil: false,
  peat_briquettes: false,
  electricity: false,
  sod_peat: false,
  heat_from_chp: false,
  wood_pellets: false,
  bioethanol: false,
  wood_chips: false,
  biodiesel: false,
  other_heating_system: false,
  other_heating_system_text: "",
  main_gas_s: false,
  bulk_lpg_s: false,
  bottled_lpg_s: false,
  heating_oil_s: false,
  electricity_s: false,
  heat_from_chp_s: false,
  bioethanol_s: false,
  housecoal_s: false,
  anthracite_s: false,
  smokeless_s: false,
  peat_briquettes_s: false,
  sod_peat_s: false,
  wood_pellets_s: false,
  wood_chips_s: false,
  biodiesel_s: false,
  other_heating_system_s: false,
  other_heating_system_s_text: "",
  gas_oil_lpg: "",
  standard: false,
  Combi: false,
  condensing: false,
  back_boiler: false,
  cpsu: false,
  range_cooker: false,
  single_burner: false,
  twin_burner: false,
  open: false,
  balanced: false,
  fan_assisted: false,
  pre_1998_or_later: false,
  pre_1998: false,
  oil_pre_1985: false,
  gas_lpg_pre_1979: false,
  wall: false,
  floor: false,
  auto: false,
  permanent_pilot: false,
  gas_oil_manufacturer: null,

  electric_storage_heater: "",
  modern_slimeline: false,
  converter: false,
  electric_storage_heater_fan_assisted: false,
  old_pre_1980_volume: false,
  integrated_storage_direct_acting: false,
  manual_charge_control: false,
  automatic_weather_dependant: false,
  celect_type: false,

  warm_air_syetem: "",
  ducted_or_stud_ducted_on_off: false,
  ducted_or_stud_ducted_modulating: false,
  features_fan_assited: false,
  features_fan_condensing: false,
  features_fan_flue_heat_recovery: false,
  room_heater_with_in_floor_ducts: false,
  electric_electricaire: false,

  solid_fuel_boilers: "",
open_fire_back_boiler: false,
closed_room_heater_back_boiler: false,
grate: "",
manual_feed_boiler: null,
auto_feed_boiler: false,
mf_af_boiler_heated_space: false,
interal_oven: false,
independant_oven: false,
biomass_boiler: false,
wood_chips_pellet_boiler: false,


electric_boilers: "",
direct_acting: false,
dry_core: false,
electric_boilers_cpsu: false,
water_storage: false,
dry_core_water_storage: false,

gas_room_heaters: "",
gas_room_pre_1980: false,
coal_effect_sealed_flue: false,
coal_effect_open_to_chimney: false,
flueless: false,
gas_room_condensing: false,
gas_room_back_boiler: false,
gas_room_other: false,
open_fronted: false,
glass_fronted: false,
flue_type_open: false,
flue_type_balanced: false,
flue_type_fan_assisted: false,

oil_room_heaters:"" ,
room_heater_range: false,
room_heater_range_boiler: false,
oil_room_heaters_pre_2000: false,
oil_room_heaters_2000_later: false,

solid_fuel_room_heaters: "",
open_fire_in_grate: false,
solid_fuel_open_fire_back_boiler: false,
closed_room_heater: false,
closed_room_heater_with_back_boiler: false,
stove: false,
flueless_bioethanol: false,
comments_on_heating_system: null,
heat_pump: "",
air_to_air: false,
air_to_water: false,
gas_fired_ground_watered: false,
ground_to_air: false,
ground_to_water: false,
water_to_air: false,
water_to_water: false,
gas_fired_air_source: false,
heat_pump_includes_auxiliary_electric_heaters: false,
heat_pump_manufacturer: null,
electric_room_heater: "",
panel_converter_radiant_heater: false,
fan_heater: false,
solid_fuel_manufacturer: "0",
individual_chp: false,
  percentage_heat_from_chp: null,
  electrical: null,
  thermal: null,
  fuel: null,
  from_primamry_heating_system: false,
  electric_immersion: false,
  electric_instantaneoues: false,
  gas_instant_single_point: false,
  gas_instant_multi_point: false,
  gas_circulator_pre_1998: false,
  keep_hot_facility_controlled_by: false,
  less_than_55_liters: false,
  greater_than_50: false,
  backboiler_kitchen_rage: false,
  primamry_heating_gas: false,
  primamry_heating_oil: false,
  primamry_heating_sf: false,
  primamry_heating_gas_circulator_1998_later: false,
  time_clock: false,
  no_time_clock: false,
  hot_water_cylinder: "",
  combi: false,
  thermal_store: false,
  CPSU: false,
 solar_water_haeting : "",
   evacuated_tube : false,
   flat_plate_glazed : false,
   flat_plate_unglazed : false,
   solar_collector_area : null,
   area_is_gross : false,
   area_is_aperture : false,
   modest_twenty_to_sixty : false,
   very_little_less_20_per : false,
   significant_sixty_to_eighty_per : false,
   heavy_more_than_eighty : false,
   dedicated_solar_storage_volume : null,
   contained_within_combained_cylinder : false,
   contained_within_separate_cylinder : false,
   orientation : null,
   tilt : null,
   solar_panel_make_model : null,
    shower_dwelling : false,
    shower_water_use_target : false,
    shower_1_flow_rate_known : "",
    shower_1_type : "",
    shower_1_flow_restrictor : "",
    Shower_1_flow_rate : "",
    Shower_1_whhr_1 : "",
    Shower_1_whhr_2 : "",
    shower_2_flow_rate_known : "",
    shower_2_type : "",
    shower_2_flow_restrictor : "",
    Shower_2_flow_rate : "",
    Shower_2_whhr_1 : "",
    Shower_2_whhr_2 : "",
    shower_3_flow_rate_known : "",
    shower_3_type : "",
    shower_3_flow_restrictor : "",
    Shower_3_flow_rate : "",
    Shower_3_whhr_1 : "",
    Shower_3_whhr_2 : "",
    shower_4_flow_rate_known : "",
    shower_4_type : "",
    shower_4_flow_restrictor : "",
    Shower_4_flow_rate : "",
    Shower_4_whhr_1 : "",
    Shower_4_whhr_2 : "",
    shower_5_flow_rate_known : "",
    shower_5_type : "",
    shower_5_flow_restrictor : "",
    Shower_5_flow_rate : "",
    Shower_5_whhr_1 : "",
    Shower_5_whhr_2 : "",
     Comments_on_water_heating: "",
     no_controls: false,
  programmer_time_clock: false,
  room_thermostat: false,
  number: "", 
  trvs: false,
  per_rads_trvs: "", 
  bypass: false,
  load_compensator: false,
  weather_compersator: false, 
  full_zone_control: false,
  boiler_energy_management: false,
  delay_start_thermostat: false,
  boiler_interlock: false,
  appliances_thermostat: false,
  appliances_time_clock: false,
   in_insulated_timber_floor : false,
   in_screed : false,
   in_concrete : false,
   whole_house_UFH : false,
   partial_UFH_including_living_area : false,
   partial_UFH_not_including_living_area : false,
   central_heating_pumps_for_space_heating : null,
   central_heating_pumps_outdoors : null,
   oil_boiler_fuel_pumps : null,
   oil_fuel_pumps_outdoors : null,
   gas_boiler_flue_fans : null,

   pre_1991_full_flow_mid_high_temp_not_pre_insulated: false,
  pre_1991_full_flow_low_temp_pre_insulated: false,
  from_1991_or_later_variable_flow_mid_temp_pre_insulated: false,
  from_1991_or_later_variable_flow_low_temp_pre_insulated: false,
  consumption_charged_flat_rate: false,
  linked_to_use: false,
  // HEATING SYSTEM #1
  efficiency: null,
  proportion_of_group_heating: null,
  fuel_type_heating_system: null,
  heating_system_1_make_model: null,

  // HEATING SYSTEM #2
  efficiency_2: null,
  proportion_of_group_heating_2: null,
  fuel_type_heating_system_2: null,
  heating_system_1_make_model_2: null,

  // CHP / WASTE HEAT
  group_heating_heat_from_chp: null,
  group_heating_power_station: false,
  group_heating_chp: false,

  // CHP EFFICIENCIES
  group_heating_electrical: false,
  group_heating_thermal: false,
  group_heating_fuel: null,
  group_heating_any_other_comment: null,
  lidar: null 
  });
  const accessToken = localStorage.getItem("access_token");
  
  const apiUrl = `https://testing.techionik.com/api/assessment/${id}/`;

  // Handle input change and send PUT request
  const handleChange = async (e) => {
    const {  name, type, value, checked,file } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(prevState => ({
        ...prevState,
        [name]: type === "checkbox" ? checked : value, // Update based on input type
      }));

    try {
      await axios.put(apiUrl, { id, ...updatedFormData } , {
        headers: {
          'Authorization': `Bearer ${accessToken}`, // Adding the token in the headers
        },});
      console.log(`${name} updated successfully`);
    } catch (error) {
        if (error.response) {
          console.error("Error response:", error.response.data);
        } else {
          console.error("Error:", error.message);
        }
      }
  };
  return (
    <div className="dashboard bg-light">
           <div className="container">
                <div className="row">
                <div className="col-md-12 text-end">
                <img src={img} alt="" className="img-fluid dashimg mx-2" />
                <IoIosArrowDown size={20} className="mx-2" />
                <span className="notibg mx-2 text-center">
                      <IoMdNotifications className="" color="black" size={20} />
                </span>
              
            </div>

            <div className="col-md-12 text-start">
                <p>Company Name  <IoIosArrowForward /> <span className="text-dark">Assessments</span>     </p>  
            </div>

            
            <div className="col-md-12 no-overflow-x text-start d-flex align-items-center justify-content-between flex-row">
    <div className="d-flex align-items-center">
        <p className="text-dark mb-0"><IoIosArrowBack size={30} /></p> 
        <div className="fs-3 mx-2 fw-bold mb-0">Assessments</div>  
    </div>
   
    <div className="">
    <button
  className="btn-prev"
  disabled={currentStep === 1} // Disable button if it's the first step
  onClick={prevStep} // Call the `prevStep` function
>
Close now
</button>

    </div>
    
</div>
                </div>
            </div> 



      <div className="multi-step-form mt-5">
        {/* Progress Bar */}
        <div className="progress-bar">
  {[...Array(8).keys()].map((step) => (
    <React.Fragment key={step}>
      <div
        className={`step ${currentStep >= step + 1 ? "active" : ""}`}
      >
        <div className="circle">{step + 1}</div>
      </div>
      {step < 7 && (
        <div
          className={`line ${
            currentStep > step + 1 ? "active" : ""
          }`}
        ></div>
      )}
    </React.Fragment>
  ))}
</div>

        {/* Form Content */}
        <div className="form-content">
          {currentStep === 1 && <Step1  formData={formData} id={id}  handleChange={handleChange} />}
          {currentStep === 2 && <Step2  formData={formData} handleChange={handleChange} />}
          {currentStep === 3 && <Step3  formData={formData} id={id}  handleChange={handleChange} />}
          {currentStep === 4 && <Step4  formData={formData} id={id}  handleChange={handleChange} />}
          {currentStep === 5 && <Step5  formData={formData} id={id}  handleChange={handleChange} />}
          {currentStep === 6 && <Step6  formData={formData} id={id}  handleChange={handleChange} />}
          {currentStep === 7 && <Step7  formData={formData} id={id}  handleChange={handleChange} />}
          {currentStep === 8 && <Step8  formData={formData} id={id}  handleChange={handleChange} />}
        </div>

        {/* Navigation Buttons */}
        <div className="form-navigation">
        
        <button
  className="btn-next"
  onClick={currentStep === 8 ? handleSubmit : nextStep}
>
  {currentStep === 8 ? "Submit" : "Next"}
</button>

        </div>
      </div>
    </div>
  );
};

const Step1 = ({ formData, id, handleChange }) => (
    
  <div>
   
   <div className="row">
      <div className="col-md-6">
        <label className="fw-bold">Assessor Name / BER reg. no. *</label>
        <input
          type="text"
          name="assessor_name"
          value={formData.assessor_name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6">
        <label className="fw-bold">Survey Date *</label>
        <input
          type="date"
          name="survey_date"
          value={formData.survey_date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-4 mt-4">
        <label className="fw-bold">Number of storeys *</label>
        <input
          type="text"
          name="num_storeys"
          value={formData.num_storeys}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-4 mt-4">
        <label className="fw-bold">Number of bedrooms *</label>
        <input
          type="text"
          name="num_bedrooms"
          value={formData.num_bedrooms}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-4 mt-4">
        <label className="fw-bold">Number of Eircode extensions *</label>
        <input
          type="text"
          name="num_extensions"
          value={formData.num_extensions}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-12 mt-4">
        <label className="fw-bold">Property Address *</label>
        <input
          type="text"
          name="property_address"
          value={formData.property_address}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6 mt-4">
        <label className="fw-bold">Eircode *</label>
        <input
          type="text"
          name="eircode"
          value={formData.eircode}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-6 mt-4">
        <label className="fw-bold">MPRN *</label>
        <input
          type="text"
          name="mprn"
          value={formData.mprn}
          onChange={handleChange}
          required
        />
      </div>
    </div>

    <div className="contaier mt-5">
        <div className="row">
            <div className="col-md-3 ">
                <h6 className="fw-bold">Dwelling Type *</h6>
                <div className="rounded">
                
                    <HouseTypes    formData={formData} id={id}  handleChange={handleChange}  />
                </div>
            </div>
            <div className="col-md-2 ">
                <h6 className="fw-bold">Age: Dwelling *</h6>
                <div className="rounded">
                
                    <Age formData={formData} id={id}  handleChange={handleChange}  />
                </div>
            </div>
            <div className="col-md-2 ">
                <h6 className="fw-bold">Age: Extension 1 *</h6>
                <div className="rounded">
                
                    <Age1 formData={formData} id={id}  handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-2 ">
                <h6 className="fw-bold">Age: Extension 2 *</h6>
                <div className="rounded ">
                
                    <Age2 formData={formData} id={id}  handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-3 ">
                <h6 className="fw-bold">Type of Rating *</h6>
                <div className="rounded">
                
                    <TypeofRating formData={formData} id={id}  handleChange={handleChange} />
                </div>
            </div>
        </div>

        <div className="row mt-3">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Main Wall *</h6>
                <div className="rounded">
                
                    <WallConstruction formData={formData} id={id}  handleChange={handleChange}  />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold"> Roof Construction: Main Dwelling*</h6>
                <div className="rounded">
                
                    <Roof formData={formData} id={id}  handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Main Dwelling*</h6>
                <div className="rounded">
                
                    <Ground formData={formData} id={id}  handleChange={handleChange} />
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Wall Type 2*</h6>
                <div className="rounded">
                
                    <WallConstruction1 formData={formData} id={id}  handleChange={handleChange}  />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold">Roof Construction: Roof Type 2*</h6>
                <div className="rounded">
                
                    <Roof1 formData={formData} handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Floor Type 2*</h6>
                <div className="rounded">
                
                    <Ground1 formData={formData} handleChange={handleChange} />
                </div>
            </div>
        </div>

        <div className="row mt-5">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Wall Type 3*</h6>
                <div className="rounded">
                
                    <WallConstruction3  formData={formData} handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold">Roof Construction: Roof Type 3*</h6>
                <div className="rounded">
                
                    <Roof3 formData={formData} handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Floor Type 3*</h6>
                <div className="rounded">
                
                    <Ground3 formData={formData} handleChange={handleChange} />
                </div>
            </div>
        </div>


        <div className="row mt-5">
            <div className="col-md-4 ">
                <h6 className="fw-bold">Wall construction Wall Type 4*</h6>
                <div className="rounded">
                
                    <WallConstruction4 formData={formData} handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold">Roof Construction: Roof Type 4*</h6>
                <div className="rounded">
                
                    <Roof4 formData={formData} handleChange={handleChange} />
                </div>
            </div>
            <div className="col-md-4 ">
                <h6 className="fw-bold fs-6">Ground Floor Construction: Floor Type 4*</h6>
                <div className="rounded">
                
                    <Ground4 formData={formData} handleChange={handleChange} />
                </div>
            </div>
        </div>

        <div>
            <div className="col-md-12">
               <FloorArea formData={formData} handleChange={handleChange} />
            </div>
        </div>
     







    </div>

    


  </div>
);

const Step2 = ({ formData, id, handleChange }) => <div>


    <div className="container">
        <div className="row">
                <div className="col-md-12">
                    <Opening formData={formData} handleChange={handleChange} />
                </div>
                <div className="col-md-12">
                    <Roomdata formData={formData} handleChange={handleChange} />
                </div>
                <div className="col-md-12">
                    <Ventilation formData={formData} handleChange={handleChange} />
                </div>
                <div className="col-md-12">
                    <LightingSummary formData={formData} handleChange={handleChange} />
                </div>
        </div>
    </div> 
   </div>;




const Step3 = ({ formData, id, handleChange }) => <div>
    <div className="container">
         <div>
             <div className="row">
                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold"> Primary Heating System *</h6>
                     <PrimaryS formData={formData} handleChange={handleChange}/>
                 </div>

                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold">Secondary Heating System *</h6>
                     <SecondaryS formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold">Primary Heating Fuel*</h6>
                     <PrimaryF formData={formData} handleChange={handleChange}/>
                 </div>   
                 <div className="col-md-3 mt-3">
                 <h6 className="fw-bold">Secondary Heating Fuel*</h6>
                     <SecondaryF formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Gas / Oil / LPG Boilers *</h6>
                     <GOLBoiler formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Solid Fuel Boilers *</h6>
                     <SFboiler formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Comments on heating system *</h6>
                     <Comments formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold"> Heat Pumps *</h6>
                     <HeatPumps formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Electric Room Heaters *</h6>
                     <ElectricRoom formData={formData} handleChange={handleChange}/>
                 </div>
                 <div className="col-md-4 mt-3">
                 <h6 className="fw-bold">Individual CHP? *</h6>
                     <CHP formData={formData} handleChange={handleChange}/>
                 </div> 

             </div>
         
         </div>
    </div>


</div>;






const Step4 = ({ formData, id, handleChange }) => <div>
      <div className="container">
         <div>
             <div className="row">
                 <div className="col-md-6 mt-3">
                 <h6 className="fw-bold"> Primary Hot Water System *</h6>
                     <PrimaryHWS formData={formData} handleChange={handleChange} />
                 </div>
                 <div className="col-md-6 mt-3">
                 <h6 className="fw-bold"> Solar Water Heating System *</h6>
                     <SolarHWS formData={formData} handleChange={handleChange} />
                 </div>
                 <div className="col-md-8 mt-3">
              
                     <ShowersBath formData={formData} handleChange={handleChange} />
                 </div>
                 <div className="col-md-4 mt-3">
              
                 <Commentsstep4 formData={formData} handleChange={handleChange} />
          </div>
             </div>
         
         </div>
    </div>


</div>;






const Step5 = ({ formData, id, handleChange }) => <div>
    <div className="row">
      <div className="col-md-4 mt-3">
      <h6 className="fw-bold"> Heating Controls (tick all that apply) *</h6>
              <Heatingcontrols formData={formData} handleChange={handleChange}/>
       </div>
       <div className="col-md-8 mt-3">
      
              <UFH formData={formData} handleChange={handleChange}/>
       </div>
    </div>


</div>;






const Step6 = ({ formData, id, handleChange }) => <div>
     <div className="row">
      <div className="col-md-4 mt-3">
      <h6 className="fw-bold"> Distribution Loss Factor and charge method *</h6>
              <DLS formData={formData} handleChange={handleChange}/>
       </div>
       <div className="col-md-8 mt-3">
      
              <HeatingS1 formData={formData} handleChange={handleChange}/>
       </div>
    </div>
    <div className="col-md-12 mt-3">
      
      <CommentsStep5 formData={formData} handleChange={handleChange}/>
</div>


</div>;










const Step7 = ({ formData, id, handleChange }) => <div className="p-5">
    
    <Step7_form  formData={formData} handleChange={handleChange} /> 

</div>;





const Step8 = () =>  <div>
    
<div className="container text-center d-flex flex-column align-items-center justify-content-center p-2">
    <div className="col-md-12 ">
<img src={submit} className="submitimg" alt="" />
<h3 className="coloa mt-2 fw-bold">Submit your Assessment Request</h3>
<p>Please review all the information you previously typed in the past steps, and if all is okay, submit your message to receive a assessment request in 24 - 48 hours.</p>
    </div>
</div>

</div>;

export default Assessmentsone;
