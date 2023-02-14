import React, { useState } from 'react'
import useFetch from '../useFetch';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Mouchard from '../Mouchardd/Mouchard'
import { format } from 'date-fns';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
function AjouterUneautorisation() {
  
  const url=process.env.React_App_URL;
  const { data: users = [] } = useFetch(url+"user/")

  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']
    
  }
  const [contact, setContact] = useState('');
  const [adresse, setadress] = useState('');
  const [employes, setEmployes] = useState(iduserinfo);
  const [heure_debut, setHeureDebut] = useState('');
  const [heure_fin, setHeurefin] = useState('');
  const validation = "en_attente"
  const [date_autorisation, setDateAutorisation] = useState(null)

  const [personneinterimaire, setpersonneinterimaire] = useState('')
  const [datetimereprise, setDateTimeReprise] = useState('')
  const [commentaire, setCommentaire] = useState('')
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
const[alerterror,setAlertError]=useState(false)
const[alertpersonne,setAlertPersonne]=useState(false)
const[alertheures,setAlertHeures]=useState(false)
  const today = new Date()
  const[disabl,setDisable]=useState(false)
  const handlesubmit = (e) => {
    e.preventDefault()
    const differenceTime = heure_fin - heure_debut
    const t = format(new Date('2018-02-14T02:00:00.000'), 'HH:mm')

    const minutes = ((new Date('2018-02-14T' + heure_fin + ':00.000').getHours() - new Date('2018-02-14T' + heure_debut + ':00.000').getHours()) * 60) + (new Date('2018-02-14T' + heure_fin + ':00.000').getMinutes() - new Date('2018-02-14T' + heure_debut + ':00.000').getMinutes())


    if (personneinterimaire==""){
     
      setAlertPersonne(true)
    }else{

    if (minutes <= 120) {



      const conge = { contact, adresse, employes, validation, date_autorisation, heure_debut, heure_fin, personneinterimaire, datetimereprise, commentaire }
      setDisable(true)
      fetch(url+"demendeconges/" + iduserinfo + "/" + "autorisation/" + date_autorisation + "/" + date_autorisation,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          },
          body: JSON.stringify(conge)
        })
        .then((response) => {


          if (!response.ok) throw new Error(response.status);
          else {
            setDisable(false)
            Mouchard("-", "encours", employes, iduserinfo, "Demande  d'une autorisation en " + date_autorisation + "de " + heure_debut + "au " + heure_fin)

            window.location.reload(false);
         
          }
        }).catch((e) => {
      /**    if ( e.response.status=== 401) {
            logoutfunction(e.response.status)
          } */
          setDisable(false)
          setAlertError(true)
      
        })



    } else {
      setAlertHeures(true)
     
    }}
  }

  return (
    <div className='row' >

      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ajouterautor">
        Demander Une autorisation
      </button>


      <div className="modal fade" id="ajouterautor" role="dialog" aria-labelledby="ajouterautor" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Demander Une autorisation</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">



              <form>


              <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">


                      <input className="form-control" placeholder="Contact" value={contact} name="contact" onChange={(e) => setContact(e.target.value)} type="text" />

                    </div>

                  </div>
                  <div className="col-md-6">
                    <div className="form-group">

                      <input className="form-control" placeholder="Adresse" value={adresse} name="adresse" onChange={(e) => setadress(e.target.value)} type="text" />

                    </div>


                  </div></div>


                  <div className='row'>




                    <div className='col-md-6'>
                      <div className="form-group">
                        <label>Date d'autorisation</label>

                        <input className="form-control" placeholder="" value={date_autorisation} min={today.getFullYear()+"-"+(today.getMonth()<10? "0"+today.getMonth():today.getMonth()) +"-20"} name="date_autorisation" onChange={(e) => setDateAutorisation(e.target.value)} type="date" />

                      </div>
           

                    </div>
                    <div className='col-md-6'>
                      <Autocomplete

options={users}
getOptionLabel={(option) => option.user_name + "  " + option.last_name || ""}

renderInput={(params) => (
  <TextField {...params} label="Personne intérimaire" variant="outlined" />
)}
onChange={(event, value) => {if (value && value.id){setpersonneinterimaire(value.id)}}}

/>

                      </div>
                  </div>


                  <div className='row'>
                    <div className='col-md-6'>
                      <div className="form-group">


                        <input className="form-control" placeholder="" value={heure_debut} name="heure_debut" onChange={(e) => setHeureDebut(e.target.value)} type="time" />

                      </div>

                    </div>
                    <div className='col-md-6'>
                      <div className="form-group">


                        <input className="form-control" placeholder="" value={heure_fin} name="heure_fin" onChange={(e) => setHeurefin(e.target.value)} type="time" min={heure_debut} />

                      </div>

                    </div>
                  </div>


              
                  <div className='row'>
                    <div className="col-md">
                      <textarea placeholder='commentaire' className="form-control" value={commentaire} onChange={(e) => setCommentaire(e.target.value)} rows="4" ></textarea>
                    </div>
                  </div>

                  <br />
                  <div className="form-group"><button className="btn btn-primary" type="submit" onClick={handlesubmit} disabled={disabl? true:false}>Valider</button></div>
             
                  {alertpersonne &&
                                      <Alert variant="filled" severity="error">
                                  Champ personne intémrimaire est vide !
                                    </Alert> }
                  {alerterror &&
                                      <Alert variant="filled" severity="error">
                                Erreur!
                                    </Alert> }
                                    {alertheures &&
                                      <Alert variant="filled" severity="error">
                               Les heures d autorisations sont supérieurs à 2 heures ! SVP passez un congé
                                    </Alert> }
                                    
                </form>


            </div>

            <div className="modal-footer">



            </div>

          </div>
        </div>
      </div>
    </div>



  )
}
export default AjouterUneautorisation;