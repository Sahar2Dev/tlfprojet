

import React, { useState } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Checkbox from "@material-ui/core/Checkbox";

function AjouterRole() {
  const url=process.env.React_App_URL;
const [viewlistcontrats_rh,setviewlistcontrat_rh]=useState(false)
const [viewlistcontrats_admin,setviewlistcontratsadmin]=useState(false)
  const [rh, setRH] = useState(false)
  const [DRH, setDRH] = useState(false)
  const [view_conge, setViewCongé] = useState(false)
  const [view_employé, setViewEmploye] = useState(false)

  const [view_departements, setViewDepartements] = useState(false)
  const [view_espacepdg, setViewEspacePdg] = useState(false)
  const [view_contrats, setvieContrats] = useState(false)
  const [view_pointeuse, setViewPointeuses] = useState(false)
  const [view_absence, setViewAbsence] = useState(false)
  const [view_planing, setViewPlaning] = useState(false)
  const [view_horaire, setViewHoraire] = useState(false)
  const [view_historique, setViewistorique] = useState(false)
  const [view_mouchard, setViewMouchard] = useState(false)
  const [view_rapports, setViewRapports] = useState(false)
  const [view_teletravail, setViewTeletravail] = useState(false)
  const [view_autorisation, setViewAutorisation] = useState(false)
  const [view_mission, setViewMission] = useState(false)


  const [view_employe_rh, setview_employe_rh] = useState(false)
  const [view_dep_rh, setview_dep_rh] = useState(false)
  const [view_contrat_rh, setview_contrat_rh] = useState(false)
  const [view_horaire_rh, setview_horaire_rh] = useState(false)
  const [view_planinng_rh, setview_planinng_rh] = useState(false)
  const [view_abscence_rh, setview_abscence_rh] = useState(false)
  const [view_historique_rh, setview_historique_rh] = useState(false)
  
  const [viewlistTeletravail_drh, setViewTéletravailDRH] = useState(false)
  const [view_Sites, setview_Sites] = useState(false)
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
  const handleChangeviewEmployeRH = () => {
    setview_employe_rh(!view_employe_rh)
  }
  const handleChangeViewDepRH = () => {
    setview_dep_rh(!view_dep_rh)
  }
  const handleChangeViewContratRH = () => {
    setview_contrat_rh(!view_contrat_rh)
  }
  const handleChangeViewHoraireRH = () => {
    setview_horaire_rh(!view_horaire_rh)
  }
  const handleChanfePlaningRH = () => {
    setview_planinng_rh(!view_planinng_rh)
  }
  const handleChangeAbsceneRH = () => {
    setview_abscence_rh(!view_abscence_rh)
  }
  const handleChangeHistoriqueRH = () => {
    setview_historique_rh(!view_historique_rh)
  }

  const handleOnChangeautorisation = () => {
    setViewAutorisation(!view_autorisation)
  }
  const handleOnChangemission = () => {
    setViewMission(!view_mission)
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
  const handleChangeSites = () => {
    setview_Sites(!view_Sites)
  }
  const [rolename, setRoleName] = useState('');

  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null

  const handlesubmit = (e) => {
    e.preventDefault()
    const role = {viewDRH,viewlistTeletravail_drh,viewlistcontrats_rh,viewlistcontrats_admin, DRH, view_employe_rh, view_dep_rh, view_contrat_rh, view_horaire_rh, view_planinng_rh, view_abscence_rh, view_historique_rh, rh, view_Sites, view_autorisation, view_mission, rolename, view_absence, view_conge, view_contrats, view_departements, view_employé, view_espacepdg, view_horaire, view_planing, view_pointeuse, view_historique, view_rapports, view_mouchard, view_teletravail, view_Sites }

    fetch(url+"role/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(role)
      }).then(() => {
      

        window.location.reload(false)

      }).catch((err) => {
 
      })
  }



  return (
    <div>

      <div className="row">

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ajouterrole">
          Ajouter un role
        </button>


        <div className="modal fade" id="ajouterrole" role="dialog" aria-labelledby="#ajouterrole" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ajouter Role</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form>

                  {/**      <TextField
                                            id="outlined-select-currency"
                                            select
                                            label="Role"
                                            value={rolename}
                                            onChange={(e) => setRoleName(e.target.value)}
                                            helperText=""
                                            margin='normal'
                                            fullWidth
                                        >
                                         
                                                <MenuItem key="10" value="Chef">
                                                Chef
                                                </MenuItem>
                                                <MenuItem key="11" value="Rh">
                                                  Rh
                                                </MenuItem>
                                                <MenuItem key="12" value="Employé">
                                                  Employé
                                                </MenuItem>
                                                <MenuItem key="13" value="Directeur">
                                                 Directeur
                                                </MenuItem>

                                     

                                        </TextField> */}
                  <div className="row">
                    <div className="col-md-6">

                      <input className="form-control" placeholder="role" value={rolename} name="role" onChange={(e) => setRoleName(e.target.value)} type="text" />
                    </div>



                  </div>

                  <div className="row">
{/**                    <div className="col-md-6">
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
                        <FormControlLabel control={<Checkbox />} label='View Pointeuse' value={view_pointeuse} onChange={handleOnChangePointeuses} />

                      </div>

                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Horaire' value={view_horaire} onChange={handleOnChangeHoraire} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Congés' value={view_conge} onChange={handleOnChangeConge} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Absence' value={view_absence} onChange={handleOnChangeAbsence} />
                      </div>

                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View type Contrats' value={view_contrats} onChange={handleOnChangeContrats} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Départements' value={view_departements} onChange={handleOnchangeDepartements} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Employé' value={view_employé} onChange={handleChangeEmploye} />
                      </div>


                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Chef' value={view_espacepdg} onChange={handleOnchangeEspacePdg} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Planing' value={view_planing} onChange={handleOnChangePlaning} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Historique' value={view_historique} onChange={handleOnChangeHistorique} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Rapports' value={view_rapports} onChange={handleOnChangeRapports} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Mouchard' value={view_mouchard} onChange={handleOnChangeMouchard} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='View Téletravail' value={view_teletravail} onChange={handleOnChangeTéletravail} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view_mission' value={view_mission} onChange={handleOnChangemission} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view_autorisation' value={view_autorisation} onChange={handleOnChangeautorisation} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view_sites' value={view_Sites} onChange={handleChangeSites} />
                      </div>


                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view employé RH' value={view_employe_rh} onChange={handleChangeviewEmployeRH} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view dep RH' value={view_dep_rh} onChange={handleChangeViewDepRH} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view type contrat RH' value={view_contrat_rh} onChange={handleChangeViewContratRH} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view horaire RH' value={view_horaire_rh} onChange={handleChangeViewHoraireRH} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view planning RH' value={view_planinng_rh} onChange={handleChanfePlaningRH} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view absence RH' value={view_abscence_rh} onChange={handleChangeAbsceneRH} />
                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view historique RH' value={view_historique_rh} onChange={handleChangeHistoriqueRH} />
                      </div>

                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view contrats_admin' value={viewlistcontrats_admin} onChange={handleViewListContratsAdmin} />

                      </div>

                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view contrats_rh' value={viewlistcontrats_rh} onChange={handleViewlistcontratsRH} />

                      </div>

                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='view List Téletravail DRH' value={viewlistTeletravail_drh} onChange={handleviewlistTeletravail_drh} />

                      </div>
                      <div className="">
                        <FormControlLabel control={<Checkbox />} label='DRH' value={viewDRH} onChange={handleChangeviewDHR} />

                      </div>
                      
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Fermer</button>
                    <button className="btn btn-primary" type="submit" onClick={handlesubmit} >Valider</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>


  )

}



export default AjouterRole;

