import ApartmentIcon from '@mui/icons-material/Apartment';

import React, { useEffect, useState } from "react";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import HomeIcon from '@mui/icons-material/Home';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import GroupsIcon from '@mui/icons-material/Groups';
import FeedIcon from '@mui/icons-material/Feed';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import { makeStyles } from '@mui/styles';
import CrudCongé from './EspacePdg/CrudCongé'
import { Routes } from "react-router-dom";
import MenuBookIcon from '@mui/icons-material/MenuBook';

import CrudRoles from './Roles/CrudRoles';
import CrudPlaning from './Planning/CrudPlaning';
import CrudAbsence from './Absence/CrudAbsence'

import CrudDepartement from './Départements/CrudDepartement';
import CrudPointages from './Pointeuses/CrudPointages';
import CrudContrats from './Contrats/CrudContrats'

import CrudJourFerié from './Absence/CrudJourFerié';
import CrudUserr from './Utilisateurs/CrudUserr';
import CrudPointeuse from './Pointeuses/CrudPointeuse';
import CrudHorraire from './Horaire/CrudHorraire';
import CrudPlansemaine from './Horaire/CrudPlansemaine';

import CrudMotif from './Absence/CrudMotif';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import {
  Route,
  Link

} from "react-router-dom";

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';

import Logout from './authentification/logout';
import ListeAutorisations from './EspacePdg/ListeAutorisations';
import Historique from './Historique/historique';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import RapportPointage from './Rapports/RapportPointage';
import RappportJournalier from './Rapports/RapportJournalier';
import RapportSemaine from './Rapports/RapportSemaine';
import Rapportabsences from './Rapports/Rapportabsences';
import RapportSynthese from './Rapports/Rapportsynthese';
import Tableau from './Accueil/Tableau';
import EmployesPartis from './Utilisateurs/EmployesPartis';

import IndicateursAutomatique from './EspacePdg/IndicateursAutomatique';
import RapportMensuelle from './Rapports/RapportMensuelle';
import RapportAnnulle from './Rapports/RapportAnnuelle';

import Missions from './EspacePdg/Missions';
import ListMouchard from './Mouchardd/ListMouchard'

import EngineeringIcon from '@mui/icons-material/Engineering';
import CrudcongesEmploye from './Congés/CrudcongesEmploye';
import UpdatePassword from './Accueil/UpdatePassword';
import CrudTeletravail from './teletravail/crudteletravail';
import Teletravails from './EspacePdg/teletravails';
import Listautorisations from './Autorisations/Listautorisations';
import ListeMissions from './Missions/ListMissions';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import CrudSite from './Site/CrudSite';

import TableRowsIcon from '@mui/icons-material/TableRows';
import Contratss from './Contrats';

import * as pdfMake from '../../node_modules/pdfmake/build/pdfmake.js';
import * as pdfFonts from '../../node_modules/pdfmake/build/vfs_fonts.js';

import JSZip from 'jszip';
import logoutfunction from './authentification/logoutfunction';

import { useSelector } from "react-redux";
import ListeAutorisationsDRH from './DRH/ListeAutorisationsDRH';
import CrudCongéDRH from './DRH/CrudCongéDRH';
import MissionsDRH from './DRH/MissionsDRH';


window.JSZip = JSZip;

pdfMake.vfs = pdfFonts.pdfMake.vfs;
const useStyle = makeStyles({
  iconSidebar: {
    marginRight: 10,
    marginLeft: 10,
    color: 'white'





,

  },

});

function Sidebar() {
  
  const userinfo =useSelector(state => state.userinfo);

  useEffect(() => {
    const url=process.env.React_App_URL;

 setTimeout(() => {
      const token=localStorage.getItem('access_token')
      fetch(url+'token/verify/', {
        method: 'post',
        headers: {
    
          'Content-Type': 'application/json',
        
        },body: JSON.stringify({
          "token": token
      })
        
      }).then((response) => {
        if(response.status==401) {logoutfunction(response)}
      }).catch((err)=>{
      
        if(err.status==401) {logoutfunction(err)}
      })
    
    }, 10800100);
    
  }, []);

  const classes = useStyle()
  const test=userinfo[0]

 
  return (

    <div>

{Object.keys(userinfo).length !=0?   
<>
      <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light" id="sidenav-main"  >
        <div className="container-fluid">

          <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
          <TableRowsIcon />
          </button>

          <div >
            <img src="./logo.png" style={{ justifyContent: 'center', width: "110px", height: "50%" }} className="img-responsive logo"  alt="..." />
          </div>

          <ul className="nav align-items-center d-md-none">

            <li className="nav-item dropdown">
              <a className="nav-link" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <div className="media align-items-center">
                  <AccountCircleRoundedIcon />
                </div>
              </a>
              <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                <div className=" dropdown-header noti-title">
                  <h6 className="text-overflow m-0">Bienvenue</h6>
                </div>
                <div className="dropdown-item">
                  <i className="ni ni-single-02"></i>
                  <Link className="nav-link-text" to="/home" style={{color:"black"}} >Mon profile</Link>
                </div>

  
                <div  className="dropdown-item">
             
             <i className="ni ni-active-40"></i>
           
             <Link className="nav-link-text" data-toggle="modal" data-target={`#p${test['id']}`} to="/home/modiferPassword" style={{color:"black"}}>Modifier mon mot de passe</Link>
       
           </div>
                <div className="dropdown-divider"></div>
                <div  className="dropdown-item">
             
                  <i className="ni ni-user-run"></i>
                
                  <Link className="nav-link-text" to="/home/logout" style={{color:"black"}} >Déconnexion</Link>
            
                </div>

              </div>
            </li>
          </ul>

          <div className="collapse navbar-collapse" id="sidenav-collapse-main" >

            <div className="navbar-collapse-header d-md-none">
              <div className="row">
                <div className="col-6 collapse-brand">
                  <a >

                  </a>
                </div>
                <div className="col-6 collapse-close">
                  <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle sidenav">
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>

            <form className="mt-4 mb-3 d-md-none">
              <div className="input-group input-group-rounded input-group-merge">
                {/** <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <span className="fa fa-search"></span>
                  </div>
                </div> */}
              </div>
            </form>

            <ul className="navbar-nav" >
           
              <li className="nav-item">
                
                <div className="nav-link">
                  <a >
                    <HomeIcon
                      className={classes.iconSidebar}
                    />
                  </a>
                  <Link className="nav-link-text" to="/home/" >Accueil</Link>

                </div>
              </li>
             
              {test['view_espacepdg'] == true? (<li className="nav-item">
                <div className="dropdown nav-link">
                  <a id="dropdownMenupdg" data-toggle="dropdown" href="">
                    < GroupsIcon
                      className={classes.iconSidebar}
                    />

                    Chef
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenupdg">


                    <Link className="dropdown-item" to="/home/ListeConges" >Congés</Link>
                    <Link className='dropdown-item' to="/home/ListeAutorisations">Liste des autorisations</Link>
                    <Link className='dropdown-item' to="/home/ListeMissions">Liste de missions</Link>
                    <Link className='dropdown-item' to="/home/indicateurautomatique">Indicateurs Dynamique</Link>
                
                  </div>
                </div>
              </li>) : ""}
              {test['viewDRH'] == true? (<li className="nav-item">
                <div className="dropdown nav-link">
                  <a id="dropdownMenupdg" data-toggle="dropdown" href="">
                    < GroupsIcon
                      className={classes.iconSidebar}
                    />

                  DRH
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenupdg">


                    <Link className="dropdown-item" to="/home/ListeCongesDRH" >Congés</Link>
                    <Link className='dropdown-item' to="/home/ListeAutorisationsDRH">Liste des autorisations</Link>
                    <Link className='dropdown-item' to="/home/ListeMissionsDRH">Liste de missions</Link>
                    <Link className='dropdown-item' to="/home/indicateurautomatique">Indicateurs Dynamique</Link>
                 
                
                  </div>
                </div>
              </li>) : ""}
              {test['view_departements'] == true || test['view_dep_rh']==true ? (<li className="nav-item">
                <div className="nav-link">
                  <a >
                    <ApartmentIcon
                      className={classes.iconSidebar} />
                  </a>
                  <Link className="nav-link-text" to="/home/Departements" >Départements</Link>
                </div>

              </li>) : ""}
    

            
              {test['view_employé']== true || test['view_employe_rh']==true ? (<li className="nav-item">
                <div className="dropdown nav-link">
                  <a  id="dropdownMenuEmployees" data-toggle="dropdown" href="">
                    < GroupsIcon
                      className={classes.iconSidebar}
                    />

                    Employés
                  </a>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuEmployees">
                    <Link className="dropdown-item" to="/home/Utilisateurs" >Employés</Link>
                    {/**   <Link className="dropdown-item" to="/EmployeesPartis" >Liste des employés partis</Link> */}
                    <Link className="dropdown-item" to="/home/Roles" >Roles</Link>
                    <Link className="dropdown-item" to="/home/employespartis" >Employés Partis</Link>
                  </div>
                </div>
              </li>) : ""}

              {test['view_Sites'] == true?      <li className="nav-item">
                <div className="nav-link">
                  <a >
                    <AddLocationAltIcon
                      className={classes.iconSidebar} />
                  </a>
                  <Link className="nav-link-text" to="/home/site" >Sites</Link>
                </div>

              </li>:""}
   
              
      
{/**test */}
{test['view_teletravail'] == true|| test['viewlistTeletravail_drh'] == true? (<li className="nav-item">
                <div className="dropdown nav-link">
                  <a id="drop" data-toggle="dropdown" href="">
                  <HomeWorkIcon
                      className={classes.iconSidebar} />

Télétravail
                  </a>
                  <div className="dropdown-menu" aria-labelledby="drop">

    
                  { test['view_teletravail'] == true?

                  (   <Link  className="dropdown-item" to="/home/teletravail" >Demander téletravail</Link>):""}
                          {test['viewlistTeletravail_drh'] == true ? (
              
              <Link  className="dropdown-item" to="/home/Listteletravails">Liste Télétravails</Link>
           ):""}
                  </div>
                </div>
              </li>) : ""} 
              {/**test */}







            {test['view_contrats'] == true|| test['view_contrat_rh']==true || test['viewlistcontrats_admin']== true|| test['viewlistcontrats_rh']==true? (<li className="nav-item">
                <div className="dropdown nav-link">
                  <a id="drop" data-toggle="dropdown" href="">
                  <FeedIcon
                      className={classes.iconSidebar} />

               Contrats
                  </a>
                  <div className="dropdown-menu" aria-labelledby="drop">

    
                  {test['view_contrats']== true ||test['view_contrat_rh']==true?

                  (  <Link className="dropdown-item" to="/home/contrats" >Types de Contrats</Link>):""}
                          {test['viewlistcontrats_admin']== true || test['viewlistcontrats_rh']==true ? (
              
                  
                  <Link className="dropdown-item" to="/home/listcontrats" >Contrats</Link>
           ):""}
                  </div>
                </div>
              </li>) : ""} 
              

 
                  {test['view_pointeuse']== true? (<li className="nav-item">
                    <div className="dropdown nav-link">
                      <a id="dropdownMenuPoin" data-toggle="dropdown" href="">

                        <FingerprintIcon
                          className={classes.iconSidebar}
                        />
                     Pointages

                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuPoin">
                        <Link className="dropdown-item" to="/home/Pointeuses" >Pointeuses</Link>
                        <Link className="dropdown-item" to="/home/Pointages" >Pointages</Link>


                      </div></div>
                  </li>) : ""}


                </ul>





                <ul className="navbar-nav mb-md-3">
                  {test['view_horaire'] == true || test['view_horaire_rh'] ==true? (<li className="nav-item">
                    <div className="dropdown nav-link">
                      <a id="dropdownMenuHorraire" data-toggle="dropdown" href="">
                        < AccessAlarmIcon
                          className={classes.iconSidebar}
                        />
                        Horaire
                      </a>

                      <div className="dropdown-menu" aria-labelledby="dropdownMenuHorraire">

                        <Link className="dropdown-item" to="/home/Horaire">Liste des Horaires</Link>
                        <Link className="dropdown-item" to="/home/plansemaine">Plan de semaine</Link>

                      </div>
                    </div>
                  </li>) : ""}
                 
                  {test['view_planing'] == true || test['view_planinng_rh'] == true? (<li className="nav-item">
                    <div className="nav-link">
                      <a target="_blank">
                        < EventNoteIcon
                          className={classes.iconSidebar}
                        />
                      </a>
                      <Link className="nav-link-text" to="/home/Planning" >Planning</Link>

                    </div>
                  </li>) : ""}

                  {test['view_absence'] == true|| test['view_abscence_rh'] == true ? (<li className="nav-item">
                    <div className="dropdown nav-link">
                      <a id="dropdownMenuAbscence" data-toggle="dropdown" href="">
                        <PersonOffIcon
                          className={classes.iconSidebar} />

                        Abscence
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuAbscence">
                        <Link className="dropdown-item" to="/home/Motif">Motif</Link>
                        <Link className="dropdown-item" to="/home/Affecter">Affecter Abscence</Link>
                        <Link className="dropdown-item" to="/home/Jours">Jours fériés</Link>
                        {/*** <Link className="dropdown-item" to="/Affichages">Affichages Abscence</Link> */}
                      </div>
                    </div>
                  </li>) : ""}
                  {test['view_conge']== true? (<li className="nav-item">
                    <div className="nav-link" >
                      <a target="_blank">
                        <DirectionsRunIcon
                          className={classes.iconSidebar}
                        />
                      </a>
                      <Link className="nav-link-text" to="/home/Demende" >Congés</Link>

                    </div>
                  </li>) : ""}
     
     
      {test['view_mission']== true?(              <li className="nav-item">
                    <div className="nav-link" >
                      <a target="_blank">
                        <EngineeringIcon
                          className={classes.iconSidebar}
                        />
                      </a>
                      <Link className="nav-link-text" to="/home/missions" >Missions</Link>

                    </div>
                  </li>):""}
                  {test['view_autorisation'] == true?(    <li className="nav-item">
                    <div className="nav-link" >
                      <a target="_blank">
                        <CoPresentIcon
                          className={classes.iconSidebar}
                        />
                      </a>
                      <Link className="nav-link-text" to="/home/autorisation" >Autorisation</Link>

                    </div>
                  </li>):""}
              
                  {test['view_historique'] == true ||test['view_historique_rh'] == true? (
                    <li className="nav-item">
                      <div className="nav-link">
                        <a target="_blank">
                          <AutorenewIcon
                            className={classes.iconSidebar}
                          />
                        </a>

                        <Link className="nav-link-text" to="/home/historique" >Historique</Link>
                      </div>

                    </li>) : ""}

                    
                  {test['view_rapports'] == true ? (
                    <li className="nav-item">
                      <div className="dropdown nav-link">
                        <a id="dropdownMenuAbscence" data-toggle="dropdown" href="">
                          <MenuBookIcon
                            className={classes.iconSidebar} />
                          Rapports
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuAbscence">

                          <Link className="dropdown-item" to="/home/rapportpointage">Rapport Pointages</Link>

                          <Link className="dropdown-item" to="/home/rapportjournalier">Rapport Journalier</Link>
                          <Link className="dropdown-item" to="/home/rapportsemaine">Rapport Semaine</Link>
                          <Link className="dropdown-item" to="/home/rapportabsence">Rapport d'absence</Link>

                          <Link className="dropdown-item" to="/home/rapportsynthese">Rapport Synthése</Link>
                          <Link className="dropdown-item" to="/home/rapportmois">rapport mensuel</Link>

                          <Link className="dropdown-item" to="/home/rapportparans">Rapport Annuel</Link>
                        </div>
                      </div>
                    </li>
                  ) : ""}
                  {test['view_mouchard']== true? (
                    <li className="nav-item">
                      <div className="nav-link">
                        <a target="_blank">
                          <SystemUpdateAltIcon
                            className={classes.iconSidebar}
                          />
                        </a>
                        <Link className="nav-link-text" to="/home/mouchard" >Mouchard</Link>
                      </div>

                    </li>) : ""}
          

                </ul>
                <ul className="navbar-nav">

                </ul>

              </div>

          </div>
      </nav>

      <div className="main-content">

        <nav className="navbar navbar-top  navbar-expand-md navbar-dark  " id="navbar-main">
          <div className="container-fluid">
       <div className='row'>
<div className='col-md-6' style={{ display: 'flex' , alignItems : 'center' , justifyContent : 'center'}} >


{/**  
<div class="card card-stats">
      
  
      
  
      
  
      
  
      

      <div class="card-body pb-0">
          
  <div class="row">
      <div class="col">
          <h5 class="card-title text-uppercase text-muted mb-0">Bienvenue </h5>
          <span class="h2 font-weight-bold mb-0">{localStorage.getItem('user_name')}  {localStorage.getItem('last_name')}</span>
      </div>
      <div class="col-auto">
        <div class="icon icon-shape bg-orange text-white rounded-circle shadow">
            <i class="ni ni-chart-pie-35"></i>
        </div>
      </div>
  </div>
 
  
      </div>
  
      
  
      
  </div> */}
<div style={{ width:'200px',border:'1px solid #77b5fe',color:"white" ,borderRadius:"8px", backgroundColor:"#7D7D7F",boxShadow :"  0 0 8px 0px",fontStyle:"italic"}}>Bienvenue <br/> {test['user_name']}  {test['last_name']} 
          </div> 
        </div>
        <div className='col-md-6'  style={{ display: 'flex' , alignItems : 'center' , justifyContent : 'center'}}>
        <div style={{width:'200px',border:'1px solid #77b5fe',color:"white",borderRadius:"8px" , backgroundColor:"#7D7D7F",boxShadow :"  0 0 8px 0px",fontStyle:"italic"}}> Role: &nbsp;{test['rolename']} <br/> Matricule:&nbsp; {test['matricule']}</div>

        </div>
        </div>

            {/* <a class="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block" href="../index.html">Tables</a> */}

            <form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
              <div className="form-group mb-0">
                {/** <div class="input-group input-group-alternative">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="fas fa-search"></i></span>
                  </div>
                  <input class="form-control" placeholder="Search" type="text" />
                </div> */}
              </div>
            </form>

            <ul className="navbar-nav align-items-center d-none d-md-flex">
              <li className="nav-item dropdown">
                <a className="nav-link pr-0" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <div className="media align-items-center">

                    <div className="media-body ml-2 d-none d-lg-block">
                      <span className="mb-0 text-sm  font-weight-bold">


                        <AccountCircleRoundedIcon />

                      </span>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right">
                  <div className=" dropdown-header noti-title">
                    <h6 className="text-overflow m-0">bienvenue!</h6>
                  </div>

                  <div className="dropdown-item">
                    <i className="ni ni-single-02"></i>
                    <Link className="nav-link-text" to="/home" style={{color:"black"}}>Mon profile</Link>
                  </div>
                  {/**  <a href="../examples/profile.html" class="dropdown-item">
                <i class="ni ni-settings-gear-65"></i>
                <span>Settings</span>
              </a> */}
  
  <div  className="dropdown-item">
             
             <i className="ni ni-active-40"></i>
           
             <Link className="nav-link-text" data-toggle="modal" data-target={`#p${test['id']}`} to="/home/modiferPassword" style={{color:"black"}} >Modifier mon mot de passe</Link>
       
           </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item">
               
                      <i className="ni ni-user-run"></i>
                 
                    <Link className="nav-link-text" to="/home/logout" style={{color:"black"}} >Déconnexion</Link>
                  </div>
                
                </div>
              </li>

            </ul>
          </div>

        </nav>

        <div className="header  pb-6 pt-8 pt-md-0" style={{backgroundColor:'rgb(99,101,106)' }}></div>
      
     {/** */}
        <Routes>
          <Route path="Pointages" element={<CrudPointages />} />

          <Route path="contrats" element={<CrudContrats />} />
          <Route path="Utilisateurs" element={<CrudUserr />} />

          <Route path="Pointeuses" element={<CrudPointeuse />} />
          <Route path="Horaire" element={<CrudHorraire />} />
          <Route path="Motif" element={<CrudMotif />} />
          <Route path="Departements" element={<CrudDepartement />} />
          <Route path="Roles" element={<CrudRoles />} />

          <Route path="plansemaine" element={<CrudPlansemaine />} />
          <Route path="Planning" element={<CrudPlaning />} />
          <Route path="Affecter" element={<CrudAbsence />} />
          <Route path="Jours" element={<CrudJourFerié />} />
          <Route path='Demende' element={<CrudcongesEmploye />} />
          <Route path='autorisation' element={<Listautorisations/>} />
        
          <Route path='missions' element={<ListeMissions/>} />
          <Route path='listeConges' element={<CrudCongé />} />



          <Route path="ListeMissions" element={<Missions />} />
          <Route path='logout' element={<Logout />}></Route>
          <Route path='modiferPassword' element={<UpdatePassword />}></Route>
          <Route path="ListeAutorisations" element={<ListeAutorisations />}></Route>

          <Route path="historique" element={<Historique />}></Route>
          <Route path="rapportpointage" element={<RapportPointage />}></Route>

          <Route path="rapportjournalier" element={<RappportJournalier />}></Route>
          <Route path="rapportsemaine" element={<RapportSemaine />}></Route>
          <Route path="rapportabsence" element={<Rapportabsences />}></Route>
          <Route path="rapportsynthese" element={<RapportSynthese />}></Route>
          <Route path="" element={<Tableau />}></Route>
          <Route path="employespartis" element={<EmployesPartis />}></Route>
          <Route path="indicateurautomatique" element={<IndicateursAutomatique />}></Route>
          <Route path="rapportmois" element={<RapportMensuelle />}></Route>
          <Route path="rapportparans" element={<RapportAnnulle />}></Route>


          <Route path="mouchard" element={<ListMouchard />}></Route>
          
          <Route path="teletravail" element={<CrudTeletravail />}></Route>
          <Route path="Listteletravails" element={<Teletravails/>}></Route>
          
          <Route path="site" element={<CrudSite/>}></Route>
          
          <Route path="listcontrats" element={<Contratss/>}></Route>

{/**DRH */}

          <Route path="ListeAutorisationsDRH" element={<ListeAutorisationsDRH />}></Route>
          
          <Route path="ListeMissionsDRH" element={<MissionsDRH/>} />
                <Route path='ListeCongesDRH' element={<CrudCongéDRH />} />
        </Routes>

      </div>
      </>
  :""}



    </div>
  )
}


export default Sidebar;