import React, { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import { makeStyles } from '@mui/styles';
import useFetch from '../useFetch';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Autocomplete from '@mui/material/Autocomplete';
import logoutfunction from '../authentification/logoutfunction';
function ModifierChild(id){
    const url=process.env.React_App_URL;
    const {id:idn}=id;
    const [nom, setNom] = useState('');
    //const { data: users = []} = useFetch(url+"user/")
    const[users,setUsers]=useState([])
    const [departementId, setDepartementId] = useState(null)
    const [chef, setChef] = useState('')
    const [rh, setRH] = useState('')
 const[nomchef,setNomchef]=useState('')
 const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
 const[prenomchef,setPrenomchef]=useState('')
 const[prenomrh,setPrenomRh]=useState('')
 const[nomrh,setnomRh]=useState('')
 
    function SelectDepartement(id) {
        fetch(url+"user/", {method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        }}).then(res =>{
            if (!res.ok){
                throw Error("could not fetch the data for that resource")
            }
            return res.json();
        }).then(data =>{
            
           setUsers(data)
          
        }).catch((e) => {

           /** if ( e.response.status=== 401) {
                logoutfunction(e.response.status)
              } */
        })
        

       
        fetch(url+"selectArborescence/" + id, {method: 'GET', 
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: token,
        }}).then((result) => {
            result.json().then((resp) => {

                setChef(resp.chef)
                setRH(resp.rh)
                setNom(resp.nom);

                setDepartementId(resp.id)
                setNomchef(resp.nomchef)
                setPrenomchef(resp.prenomchef)
                setnomRh(resp.nomrh)
                setPrenomRh(resp.prenomrh)

            })
        }).catch((e) => {

        /**    if ( e.response.status=== 401) {
                logoutfunction(e.response.status)
              } */
        })
    }  
    const UpdateDepartement = () => {

        let departementList = { nom,chef,rh }


        fetch(url+'arbo/' + departementId, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                Authorization:token
            },
            body: JSON.stringify(departementList)
        }).then((response) => {
      

        }

        ).catch((e) => {
/**
            if ( e.response.status=== 401) {
                logoutfunction(e.response.status)
              } */
        })


    }
     const useStyle = makeStyles({
        icon: {
            marginRight: 10,
            marginLeft: 10,
            color: '#5ac2df'






,

        },
        dialog: {

            boxShadow: 'none',
        }
    });
    const classes = useStyle()
 
return(
    <div>
    <a onClick={() => SelectDepartement(idn)} data-toggle="modal" data-target={`#e${idn}`} ><EditIcon
    className={classes.icon}
/></a>
    
    


            <div className="modal fade" id={`e${idn}`} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modifier Département</h5>
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

                                                <input className="form-control" placeholder="" value={nom} name="nom" onChange={(e) => setNom(e.target.value)} type="text" />
                                            </div>
                                        </div>
                                    </div>
                                  
                                    </div>
                                    <div className='row'>
                   {/**                 <div className="col-md-6">
                                        <div className='form-group'>
                                     
             
                                            <label >RH</label>
                               <Autocomplete
   
   options={users}
   getOptionLabel={(option) => option.user_name +"  "+ option.last_name || ""}
   
   renderInput={(params) => (
     <TextField {...params} label={nomrh+" "+prenomrh} variant="outlined"  />
   )}
   onChange={(event, value) =>{if (value && value.id){setRH(value.id)}}}


 /> 
                                        </div>
                                    </div> */}
                                    <div className="col-md-6">
                                    <div className='form-group'>
                                    <label >Chef</label>
                                    <Autocomplete
   
   options={users}
   getOptionLabel={(option) => option.user_name +"  "+ option.last_name || ""}

   renderInput={(params) => (
     <TextField {...params} label={nomchef+"  "+prenomchef} variant="outlined"  />
   )}
   onChange={(event, value) =>{if (value && value.id){setChef(value.id)}}}

 /> 
                                        </div>
                                     

                                    </div>
                                    </div>



                                <div className="form-group"><button className="btn btn-primary" onClick={UpdateDepartement}>Valider</button></div>    </form>

                        </div>


                    </div>
                </div>
            </div>
        </div>

)
}
export default ModifierChild;