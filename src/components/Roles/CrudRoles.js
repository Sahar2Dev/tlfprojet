

import AjouterRole from "./AjouterRole";



import * as React from 'react';
import useFetch from "../useFetch";
import { makeStyles } from '@mui/styles';


import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';

import { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Checkbox from "@material-ui/core/Checkbox";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import $ from "jquery";

import frdatatable from '../../frdatatable.json'
function CrudRoles() {
  const [viewlistcontrats_rh,setviewlistcontrat_rh]=useState(false)
const [viewlistcontrats_admin,setviewlistcontratsadmin]=useState(false)
const url=process.env.React_App_URL;
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null

  const[rh,setRH]=useState(false)
  const[DRH,setDRH]=useState(false)
  const[view_conge,setViewCongé]=useState(false)
  const[view_employé,setViewEmploye]=useState(false)
  
  const[view_departements,setViewDepartements]=useState(false)
  const[view_espacepdg,setViewEspacePdg]=useState(false)
  const[view_contrats,setvieContrats]=useState(false)
  const[view_pointeuse,setViewPointeuses]=useState(false)
  const[view_absence,setViewAbsence]=useState(false)
  const[view_planing,setViewPlaning]=useState(false)
  const[view_horaire,setViewHoraire]=useState(false)
  const[view_historique,setViewistorique]=useState(false)
  const[view_mouchard,setViewMouchard]=useState(false)
  const[view_rapports,setViewRapports]=useState(false)
  const[view_teletravail,setViewTeletravail]=useState(false)
  
  const[view_Sites,setview_Sites]=useState(false)

  const [view_employe_rh, setview_employe_rh] = useState(false)
  const [view_dep_rh, setview_dep_rh] = useState(false)
  const [view_contrat_rh, setview_contrat_rh] = useState(false)
  const [view_horaire_rh, setview_horaire_rh] = useState(false)
  const [view_planinng_rh, setview_planinng_rh] = useState(false)
  const [view_abscence_rh, setview_abscence_rh] = useState(false)
  const [view_historique_rh, setview_historique_rh] = useState(false)
  const [viewlistTeletravail_drh, setViewTéletravailDRH] = useState(false)
  const[viewDRH,setviewDHR]=useState(false)
  const handleChangeviewDHR=()=>{
    setviewDHR(!viewDRH)
  }
  const handleviewlistTeletravail_drh=()=>{
    setViewTéletravailDRH(!viewlistTeletravail_drh)
  }
  const handleViewListContratsAdmin=()=>{
    setviewlistcontratsadmin(!viewlistcontrats_admin)
  }
  const handleViewlistcontratsRH=()=>{
    setviewlistcontrat_rh(!viewlistcontrats_rh)
  }
  const handleChangeviewEmployeRH=()=>{
    setview_employe_rh(!view_employe_rh)
  }
  const handleChangeViewDepRH=()=>{
    setview_dep_rh(!view_dep_rh)
  }
  const handleChangeViewContratRH=()=>{
    setview_contrat_rh(!view_contrat_rh)
  }
  const handleChangeViewHoraireRH=()=>{
    setview_horaire_rh(!view_horaire_rh)
  }
  const handleChanfePlaningRH=()=>{
    setview_planinng_rh(!view_planinng_rh)
  }
  const handleChangeAbsceneRH=()=>{
    setview_abscence_rh(!view_abscence_rh)
  }
  const handleChangeHistoriqueRH=()=>{
    setview_historique_rh(!view_historique_rh)
  }
  const handleChangeSites=()=>{
    setview_Sites(!view_Sites)
  }
  const handleOnChangeAbsence = () => {
    setViewAbsence(!view_absence);
  };
  const handleOnChangeConge = () => {
    setViewCongé(!view_conge);
  };
  const handleChangeEmploye = () => {
    setViewEmploye(!view_employé);
  };
  const handleOnchangeDepartements = () => {
    setViewDepartements(!view_departements);
  };
  const handleOnchangeEspacePdg = () => {
    setViewEspacePdg(!view_espacepdg);
  };
  const handleOnChangePlaning = () => {
    setViewPlaning(!view_planing);
  };
  const handleOnChangeHoraire = () => {
    setViewHoraire(!view_horaire);
  };
  const handleOnChangePointeuses = () => {
    setViewPointeuses(!view_pointeuse);
  };
  const handleOnChangeContrats = () => {
    setvieContrats(!view_contrats);
  };
  const handleOnChangeHistorique = () => {
    setViewistorique(!view_historique);
  };
  const handleOnChangeRapports = () => {
    setViewRapports(!view_rapports);
  };
  const handleOnChangeMouchard = () => {
    setViewMouchard(!view_mouchard);
  };
  const handleOnChangeTéletravail = () => {
    setViewTeletravail(!view_teletravail);
  };
 
  const [view_autorisation,setViewAutorisation]=useState(false)
  const[view_mission,setViewMission]=useState(false)
  const handleOnChangeautorisation=()=>{
    setViewAutorisation(!view_autorisation)
  }
  const handleOnChangemission=()=>{
    setViewMission(!view_mission)
  }
  const { data: roles = [], isloading, error } = useFetch(url + "role/")
  const useStyle = makeStyles({
    icon: {
      marginRight: 10,
      marginLeft: 10,
      color: '#5ac2df'









    },
    dialog: {

      boxShadow: 'none',
    }
  });
  const [open, setOpen] = useState(false);
  const [roleIddelete, setroleIddelete] = useState(null)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyle()


  const [rolename, setNomRole] = useState('');

  const [roleId, setRoleId] = useState(null)

  
  function SelectRole(id) {
    fetch(url + "role/" + id, {method: 'GET', 
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: token,
    }}).then((result) => {
      result.json().then((resp) => {
        setNomRole(resp.rolename);
        setRoleId(resp.id)
        setViewCongé(resp.view_conge)
        setViewEmploye(resp.view_employé)
        setViewDepartements(resp.view_departements)
        setViewEspacePdg(resp.view_espacepdg)
        setvieContrats(resp.view_contrats)
        setViewPointeuses(resp.view_pointeuse)
        setViewAbsence(resp.view_absence)
        setViewPlaning(resp.view_planing)
        setViewHoraire(resp.view_horaire)
        setViewRapports(resp.view_rapports)
        setViewMouchard(resp.view_mouchard)
        setViewistorique(resp.view_historique)
        setViewTeletravail(resp.view_teletravail)
       
        setViewMission(resp.view_mission)
        setViewAutorisation(resp.view_autorisation)
        setRH(resp.rh)
        setview_Sites(resp.view_Sites)
setview_employe_rh(resp.view_employe_rh)
setview_dep_rh(resp.view_dep_rh)
setview_contrat_rh(resp.view_contrat_rh)

setview_horaire_rh(resp.view_horaire_rh)

setview_planinng_rh(resp.view_planinng_rh)

setview_abscence_rh(resp.view_abscence_rh)
setview_historique_rh(resp.view_historique_rh)
setDRH(resp.DRH)

setviewlistcontrat_rh(resp.viewlistcontrats_rh)
setviewlistcontratsadmin(resp.viewlistcontrats_admin)
    setViewTéletravailDRH(resp.viewlistTeletravail_drh)
    setviewDHR(resp.viewDRH)
      })
    }).catch((err)=>{
     
    })





  }
  const DeleteRole = (roleId) => {
    fetch(url + 'role/' + roleId, {
      method: 'DELETE',
      headers: {

        'Content-Type': 'application/json',
        Authorization: token,
      },
    }).then(() => {
      setOpen(false);
      window.location.reload(false);
    }
    ).catch((err)=>{

    })


  }

  const Updaterole = () => {

    let roleList = {viewDRH, viewlistTeletravail_drh,viewlistcontrats_rh,viewlistcontrats_admin,DRH,view_employe_rh,view_dep_rh,view_contrat_rh,view_horaire_rh,view_planinng_rh,view_abscence_rh,view_historique_rh,view_Sites,rh,view_autorisation,view_mission, rolename,view_absence,view_conge,view_contrats,view_departements,view_employé,view_espacepdg,view_horaire,view_planing,view_pointeuse ,view_historique,view_rapports,view_mouchard,view_teletravail}


    fetch(url + 'role/' + roleId, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(roleList)
    }).then(() => {



    }

    ).catch((err)=>{
 /**     if ( err.response.status=== 401) {
        logoutfunction(err.response.status)
      } */
    })
  }
  function openDataTable(id){
    $(document).ready(function () {
      $(`#viewaccess${id}`).DataTable({
        language:frdatatable,
        "dom": 'Blfrtip',
        buttons: [
          {extend:'excel',
        className:'btn btn-buttondatatable'},
        {extend:'copy',
        className:'btn btn-buttondatatable'},
        {extend:'pdf',
        orientation: 'landscape',
        pageSize: 'LEGAL',
        className:'btn btn-buttondatatable'},
        {extend:'csv',
        className:'btn btn-buttondatatable'},
        {extend:'print',
        className:'btn btn-buttondatatable'},      
        
  
         
        ]
        ,"bDestroy": true
       } )
    
  });
  }

  $(document).ready(function () {
    $('#roletable').DataTable({
      language:frdatatable,
      "dom": 'Blfrtip',
      buttons: [
        {extend:'excel',
      className:'btn btn-buttondatatable'},
      {extend:'copy',
      className:'btn btn-buttondatatable'},
      {extend:'pdf',
      orientation: 'landscape',
      pageSize: 'LEGAL',
      className:'btn btn-buttondatatable'},
      {extend:'csv',
      className:'btn btn-buttondatatable'},
      {extend:'print',
      className:'btn btn-buttondatatable'},      
      

       
      ]
      ,"bDestroy": true
     } )
  
});
  return (
    <div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col">
            <div className="card shadow">
              
            <div className='card-header' style={{backgroundColor:"#5ac2df"}}>
      <h3 style={{color:"white"}}>Roles </h3>
      </div>
              <div className="card-header border-0">
                <AjouterRole />
              </div>
              <div className="table-responsive">
                {roles.length==0?"":        <table className="dispaly" id="roletable">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Role</th>



                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                  <tbody>

                    {roles.map(role =>
                      <tr key={role.id}>
                        <td>{role.rolename}</td>


                        <td>
                          <tr>

                            <td>

                              <a onClick={() => SelectRole(role.id)} data-toggle="modal" data-target="#modalrole" ><EditIcon
                                className={classes.icon}
                              /></a>
                            </td>
                        
                            <td>
                              <a onClick={() => { handleClickOpen(); setroleIddelete(role.id); }}  ><DeleteIcon className={classes.icon} /></a>


                            </td>



<td>
                               <div >
                              <a data-toggle="modal" data-target={`#a${role.id}`} onClick={openDataTable(role.id)}><VisibilityIcon className={classes.icon} />

                              <div className="modal fade" id={`a${role.id}`}  role="dialog" aria-labelledby={`a${role.id}`} aria-hidden="true">
                                <div className="modal-dialog modal-lg" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalLabel">Permissions</h5>
                                   
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>

                                    </div>
                                    <div className="modal-body">
                                    
                                      <div className="table-responsive">
                                    
                                        <table className="display" id={`viewaccess${role.id}`}>
                                     
                                          <thead className="thead-light">
                                          <h2>Role :{role.rolename}</h2>
                                            <tr>

                                              <th scope="col"><h3>Vue</h3></th>
                                              <th scope="col"><h3>Autorisation</h3></th>

                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>Vue d'absences</td>
                                              <td>{role.view_absence ? "oui" : "Non"}</td>

                                            </tr>
                                            <tr>
                                              <td>Vue de congés</td>
                                              <td>{role.view_conge ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue d'employés</td>
                                              <td>{role.view_employé ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue de départements</td>
                                              <td>{role.view_departements ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Chef</td>
                                              <td>{role.view_espacepdg ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue type de contrats</td>
                                              <td>{role.view_contrats ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue de pointeuse</td>
                                              <td>{role.view_pointeuse ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue d'horaire</td>
                                              <td>{role.view_horaire ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue d'absence</td>
                                              <td>{role.view_absence ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue de planing</td>
                                              <td>{role.view_planing ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue de Rapports</td>
                                              <td>{role.view_rapports ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue de Mouchard</td>
                                              <td>{role.view_mouchard ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue d'Historique</td>
                                              <td>{role.view_historique ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue Téletravail</td>
                                              <td>{role.view_teletravail ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue Mission</td>
                                              <td>{role.view_mission ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>Vue Autorisation</td>
                                              <td>{role.view_autorisation ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view_Sites</td>
                                              <td>{role.view_Sites ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view Employé RH</td>
                                              <td>{role.view_employe_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view Département RH</td>
                                              <td>{role.view_dep_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view type contrat RH</td>
                                              <td>{role.view_contrat_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view horaire RH</td>
                                              <td>{role.view_horaire_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view Planing RH</td>
                                              <td>{role.view_planinng_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view Abscence RH</td>
                                              <td>{role.view_abscence_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view Historique RH</td>
                                              <td>{role.view_historique_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            
                                            <tr>
                                              <td>view list contrats_rh</td>
                                              <td>{role.viewlistcontrats_rh ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view list contrats admin</td>
                                              <td>{role.viewlistcontrats_admin ? "oui" : "Non"}</td>
                                            </tr>
                                            <tr>
                                              <td>view list Téletravail DRH</td>
                                              <td>{role.viewlistTeletravail_drh ? "oui" : "Non"}</td>
                                            </tr>
                                            
                                            <tr>
                                              <td> DRH</td>
                                              <td>{role.viewDRH ? "oui" : "Non"}</td>
                                            </tr>

                                          </tbody>
                                        
                                          </table>
                                          
                                          
                                          </div>


                                    </div>
                                    <div className="modal-footer">



                                    </div>
                                  </div>
                                </div>
                              </div>
                              </a>
                            </div> </td>
                          </tr>
                        </td>                    
                        
                      </tr>
                    )}

                    <Dialog

                      BackdropProps={{ invisible: true }}
                      className={classes.dialog}
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        {"supprimer un role"}
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          êtes-vous sûr de vouloir supprimer un role ?
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={handleClose}>non</Button>
                        <Button onClick={() => { DeleteRole(roleIddelete) }}>
                          oui
                        </Button>
                      </DialogActions>
                    </Dialog>



                  </tbody>
                </table>}
        
              </div>
            </div>
            <div>

              <div className="row">
                <div className="col-md-3">



                  <div className="modal fade" id="modalrole" role="dialog" aria-labelledby="modalrole" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Modifier Role</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">



                          <form>

<div className="row">
  <div className="col-md-6">
  
      <input className="form-control" placeholder="Ajouter un role" value={rolename} name="rolename"  onChange={(e) => setNomRole(e.target.value)} type="text"/>
      
  </div>

</div>
<div className="row">
{/** <div className="col-md-6">
                                   <TextField
                                      id="outlined-select-currency"
                                      select
                                      label="RH"
                                      value={rh}
                                      onChange={(e) => setRH(e.target.value)}
                                      helperText="RH"
                                      margin='normal'
                                      fullWidth
                                    >
                                      <MenuItem value={"true"}>Oui</MenuItem>
                                      <MenuItem value={"false"}>Non</MenuItem>


                                    </TextField>   
                  </div> */}
                  <div className="col-md-6">
                                   <TextField
                                      id="outlined-select-currency"
                                      select
                                      label="DRH"
                                      value={DRH}
                                      onChange={(e) => setDRH(e.target.value)}
                                      helperText="DRH"
                                      margin='normal'
                                      fullWidth
                                    >
                                      <MenuItem value={"true"}>Oui</MenuItem>
                                      <MenuItem value={"false"}>Non</MenuItem>


                                    </TextField>   
                  </div>
 </div>
                     
      <div className="form-group">
        
     
        <div className="row">
        <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_pointeuse ? true:false} label='View Pointeuse' value={view_pointeuse} onChange={handleOnChangePointeuses}  />
      
          </div> 
        
          <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_horaire ? true:false} label='View Horaire' value={view_horaire} onChange={handleOnChangeHoraire} />
          </div>
          <div className="">
           <FormControlLabel control={<Checkbox/>}  checked={view_conge ? true:false} label='View Congés' value={view_conge} onChange={handleOnChangeConge}  /> 
           </div>
        <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_absence ? true:false} label='View Absence' value={view_absence} onChange={handleOnChangeAbsence}/>
          </div>
         
           <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_contrats ? true:false} label='View type Contrats' value={view_contrats} onChange={handleOnChangeContrats} />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox /> } checked={view_departements ? true:false} label='View Départements' value={view_departements} onChange={handleOnchangeDepartements}  />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_employé ? true:false}  label='View Employé' value={view_employé} onChange={handleChangeEmploye}  />
          </div>

              
          <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_espacepdg? true:false}  label='View Chef' value={view_espacepdg} onChange={handleOnchangeEspacePdg}  />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} checked={view_planing ? true:false}  label='View Planing' value={view_planing} onChange={handleOnChangePlaning} />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Historique' value={view_historique} onChange={handleOnChangeHistorique} checked={view_historique ? true:false} />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Rapports' value={view_rapports} onChange={handleOnChangeRapports} checked={view_rapports ? true:false} />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Mouchard' value={view_mouchard} onChange={handleOnChangeMouchard} checked={view_mouchard ? true:false} />
          </div>
        
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Téletravail' value={view_teletravail} onChange={handleOnChangeTéletravail} checked={view_teletravail ? true:false} />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Mission' value={view_mission} onChange={handleOnChangemission} checked={view_mission ? true:false} />
          </div>
        
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Autorisation' value={view_autorisation} onChange={handleOnChangeautorisation} checked={view_autorisation ? true:false} />
          </div>
          <div className="">
          <FormControlLabel control={<Checkbox/>} label='View Sites' value={view_Sites} onChange={handleChangeSites} checked={view_Sites ? true:false} />
          </div>

        <div className="">
                      <FormControlLabel control={<Checkbox />} label='view employé RH' value={view_employe_rh} onChange={handleChangeviewEmployeRH} checked={view_employe_rh ? true:false} />
                    </div>
                    <div className="">
                      <FormControlLabel control={<Checkbox />} label='view dep RH' value={view_dep_rh} onChange={handleChangeViewDepRH} checked={view_dep_rh ? true:false} />
                    </div>
                    <div className="">
                      <FormControlLabel control={<Checkbox />} label='view type contrat RH' value={view_contrat_rh} onChange={handleChangeViewContratRH} checked={view_contrat_rh ? true:false} />
                    </div>
                    <div className="">
                      <FormControlLabel control={<Checkbox />} label='view horaire RH' value={view_horaire_rh} onChange={handleChangeViewHoraireRH} checked={view_horaire_rh ? true:false} />
                    </div>
                    <div className="">
                      <FormControlLabel control={<Checkbox />} label='view planning RH' value={view_planinng_rh} onChange={handleChanfePlaningRH} checked={view_planinng_rh ? true:false} />
                    </div>
                    <div className="">
                      <FormControlLabel control={<Checkbox />} label='view absence RH' value={view_abscence_rh} onChange={handleChangeAbsceneRH} checked={view_abscence_rh ? true:false} />
                    </div>
                    <div className="">
                      <FormControlLabel control={<Checkbox />} label='view historique RH' value={view_historique_rh} onChange={handleChangeHistoriqueRH} checked={view_historique_rh ? true:false} />
                    </div>
                    <div className="">
                        <FormControlLabel control={<Checkbox />} label='view contrats_admin' value={viewlistcontrats_admin} onChange={handleViewListContratsAdmin} checked={viewlistcontrats_admin ? true:false}  />

                      </div>

                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view contrats_rh' value={viewlistcontrats_rh} onChange={handleViewlistcontratsRH} checked={viewlistcontrats_rh ? true:false}  />

                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view List Téletravail DRH' value={viewlistTeletravail_drh} onChange={handleviewlistTeletravail_drh} checked={viewlistTeletravail_drh ? true:false}  />

                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='DRH' value={viewDRH} onChange={handleChangeviewDHR} checked={viewDRH ? true:false}  />

                      </div>
                      
       </div>
   
      </div>


                            <div className="form-group"><button className="btn btn-primary" onClick={Updaterole}>Valider</button></div>    </form>


                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div></div></div></div></div>
  )
}
export default CrudRoles;
/**
 */