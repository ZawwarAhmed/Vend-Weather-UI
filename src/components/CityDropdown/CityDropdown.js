import React from 'react'
import {citiesData} from "../../data/citiesData"
import Dropdown from '../common/Dropdown/Dropdown'

function CityDropdown() {
  return (
    <div>
      <Dropdown data={citiesData} />
    </div>
  )
}

export default CityDropdown;