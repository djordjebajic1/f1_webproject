import React from 'react';
import "./statistika.css";

export default function StatistikaKonstruktori() {
    return (

<div className="tiles-item-table reveal-from-botom" data-reveal-delay="200">
      <main>
  
      <h1>Poredak konstruktora</h1>
  
      <table id="table2" class="statistika">
      <thead>
            <tr>
                <th>Tim</th>
                <th>Broj pobjeda</th>
                <th>Broj podija</th>
                <th>Broj bodova</th>
            </tr>
        </thead>
        <tbody>
            <tr class="ferr" >
     
                <td data-label="Team">
                    Scuderia Ferrari
                </td>
                <td data-label="Br-pob">
                    2
                </td>
                <td data-label="Br-pod">
                    7
                </td>
                <td data-label="Br-bod">
                    157
                </td>
               
            </tr>
              <tr class="merc" >
            
                <td data-label="Team">
                    Mercedes AMG Petronas
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    2
                </td>
                <td data-label="Br-bod">
                    95
                </td>
               
            </tr>
               <tr class="will" >
            
                <td data-label="Team">
                    Williams Racing
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    0
                </td>
                <td data-label="Br-bod">
                    3
                </td>
               
            </tr>
              <tr class="alpine" >
           
                <td data-label="Team">
                    Alipine F1 Team
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    0
                </td>
                <td data-label="Br-bod">
                    26
                </td>
               
            </tr>
              <tr class="alfa" >
           
                <td data-label="Team">
                    Alfa Romeo F1 Team
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    0
                </td>
                <td data-label="Br-bod">
                    31
                </td>
               
            </tr>
              <tr class="atauri" >
          
                <td data-label="Team">
                    Scuderia AlphaTauri
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    0
                </td>
                <td data-label="Br-bod">
                    16
                </td>
               
            </tr>
              
              <tr class="hass" >
              
                <td data-label="Team">
                    Hass F1 Team
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    0
                </td>
                <td data-label="Br-bod">
                    15
                </td>
               
            </tr>
           <tr class="mclaren" >
               
                <td data-label="Team">
                    Mclaren F1 Team
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    1
                </td>
                <td data-label="Br-bod">
                    46
                </td>
               
            </tr>
           
           <tr class="rb" >
            
                <td data-label="Team">
                    Red Bull Racing
                </td>
                <td data-label="Br-pob">
                    3
                </td>
                <td data-label="Br-pod">
                    5
                </td>
                <td data-label="Br-bod">
                    151
                </td>
               
            </tr>
          
          
          <tr class="astm" >
             
                <td data-label="Team">
                    Aston Martin F1 Team 
                </td>
                <td data-label="Br-pob">
                    0
                </td>
                <td data-label="Br-pod">
                    0
                </td>
                <td data-label="Br-bod">
                    6
                </td>
                </tr>
       </tbody>
    </table>
  </main>
  </div>
   
  );
  }