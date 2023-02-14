
import React from 'react';
import {useState} from 'react';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Mouchard from '../Mouchardd/Mouchard';
import useFetch from "../useFetch";
import Autocomplete from '@mui/material/Autocomplete';
import { Alert } from '@mui/material';
import { useSelector } from 'react-redux';
function ImporterPointage(){
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
  const[alert,setAlert]=useState(false)
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']

  
    
  }
  const url=process.env.React_App_URL;
    const { data: pointeuses, isloading, error } = useFetch(url+"pointeuse/")
    const { data: employees, isloading: zz, error: ee } = useFetch(url+"user/")
    const [date_pointage, setDate] = useState('');
  
 
    const [pointeuse,setPointeuse]=useState(null);
    const [employes,setEmployes]=useState('employes');
  
    const handlesubmit = (e) => {
      setAlert(false)
      e.preventDefault()
      const pointage = { date_pointage,employes,pointeuse }
  
      fetch(url+"createpointage/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
          body: JSON.stringify(pointage)
        })
        .then((response) =>{
          if(!response.ok) throw new Error(response.status);
          else window.location.reload(false)
    
      })
        .then(() => {
          Mouchard("en cours","ajouté",employes,iduserinfo,"Ajouter un pointage: "+date_pointage)
        
  
  
        }).catch((e) => {
          

         /**   if ( e.response.status=== 401) {
                logoutfunction(e.response.status)
            } */
          setAlert(true)
        })
    }
  
    return(
        <div>

      <div className="row">

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#ajouterpointage">
          Ajouter Pointage
        </button>


        <div className="modal fade" id="ajouterpointage"  role="dialog" aria-labelledby="ajouterpointage" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Ajouter Pointage</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">



                <form>


                  <div className="row">
                    <div className="col-md-6">

                      <div className="form-group">
                        <div className="input-group input-group-merge input-group-alternative">

                          <input className="form-control" placeholder="" value={date_pointage} name="date_pointage" onChange={(e) => setDate(e.target.value)} type="datetime-local" />
                        </div>
                      </div>
                    </div></div>
                  <div className="row">
                
                    <div className="col-md-6">

                    <Autocomplete
   
   options={employees}
   getOptionLabel={(option) => option.user_name +"  "+ option.last_name || ""}

   renderInput={(params) => (
     <TextField {...params} label="employe" variant="outlined" />
   )}
   onChange={(event, value) =>{if (value && value.id){setEmployes(value.id)}}} 

 /> 
                    </div>
                    <div className="col-md-6">
                      <TextField
                        id="outlined-select-currency"
                        select
                        label="pointeuse"
                        value={pointeuse}
                        onChange={(e) => { setPointeuse(e.target.value) }}
                        helperText="Please select pointeuse"
                        margin='normal'
                        fullWidth
                      >
                        {pointeuses.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.nom_pointeuse}
                          </MenuItem>
                        ))}

                      </TextField>
                    </div>
                  </div>
              
                  <div className="form-group"><button className="btn btn-primary" type="submit" onClick={handlesubmit} >Valider</button></div>

   {alert &&  <Alert variant="filled" severity="error">Il faut sélectionnez une date/heure et un employé !</Alert>}

                </form>
               

              </div>

              <div className="modal-footer">



              </div>

            </div>
          </div>
        </div>
      </div>


    </div>
    )
}
export default ImporterPointage;