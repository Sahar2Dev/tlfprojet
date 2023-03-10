import React,{useState} from "react";
import useFetch from "../useFetch";

import { makeStyles } from '@mui/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Mouchard from '../Mouchardd/Mouchard';
import ScrollContainer from "react-indiana-drag-scroll";
import $ from "jquery";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import frdatatable from '../../frdatatable.json'
import { useSelector } from "react-redux";
const ListeAutorisations = () => {
  const url=process.env.React_App_URL;
  const token = localStorage.getItem('access_token') ? 'Bearer ' +localStorage.getItem('access_token') :null
  const userinfo =useSelector(state => state.userinfo);
  const test=userinfo[0]
  if(Object.keys(userinfo).length !=0){ 
    var iduserinfo=test['id']
   var DRH=test['DRH']
   var admin=test['admin']
   var rolename=test['rolename']
   var iddep=test['iddep']
   var emaildrh=test['emaildrh']
   var emailsDRHS=JSON.stringify(test['emailsDRHS'])
    
  }
  const [openvalid, setopenvalid] = useState(false);
  const[idcongev,setIdcongev]=useState('')

  const[iduserrv,setIdUserrv]=useState('')
  const[datedebutv,setDatedebutv]=useState('')
  const[datefinv,setDatefinv]=useState('')
  const[validationnv,setValidationv]=useState('')
  const[validationrhhv,setValidationRHv]=useState('')
 const[idchefv,setIdchefv]=useState('')
 const[idrhv,setIdrhv]=useState('')
 const[emailemployev,setEmailemployev]=useState('')
 const[emailchefv,setEmailchefv]=useState('')
 const[date_autorisation,setDateAutorisation]=useState('')
const [user_namev,setUserNameV]=useState('')
const [lastnamev,setLastNameV]=useState('')
  const handleClickOpenvalid = (id,iduser,datedebut,datefin,validationn,validationrhh,chefid,rhid,emailemp,emailche,date_autorisation,user_name,last_name) => {
    setopenvalid(true);
    setIdcongev(id)
    setIdUserrv(iduser)
    setDatedebutv(datedebut)
    setDatefinv(datefin)
    setValidationv(validationn)
    setValidationRHv(validationrhh)
    setIdchefv(chefid)
    setIdrhv(rhid)
    setEmailchefv(emailche)
    setEmailemployev(emailemp)
    setDateAutorisation(date_autorisation)
    setUserNameV(user_name)
    setLastNameV(last_name)
  };
  const handleClosevalid = () => {
    setopenvalid(false);

  };

  const [openrefus, setopenrefus] = useState(false);
  const[idcongerefus,setIdcongeRefus]=useState('')

  const[iduserr,setIdUserr]=useState('')
  const[datedebut,setDatedebut]=useState('')
  const[datefin,setDatefin]=useState('')
  const[validationn,setValidation]=useState('')
  const[validationrhh,setValidationRH]=useState('')
 const[idchef,setIdchef]=useState('')
 const[idrh,setIdrh]=useState('')
 const[emailemploye,setEmailemploye]=useState('')
 const[emailchef,setEmailchef]=useState('')
 const[date_autorisationf,setDateAutorisationf]=useState('')
 const[user_namef,setUserNameF]=useState('')
 const[last_namef,setLastNamef]=useState('')
  const handleClickOpenrefus = (id,iduser,datedebut,datefin,validationn,validationrhh,chefid,rhid,emailemp,emailche,date_autorisationf,user_name,last_name) => {
    setopenrefus(true);
    setIdcongeRefus(id)
    setIdUserr(iduser)
    setDatedebut(datedebut)
    setDatefin(datefin)
    setValidation(validationn)
    setValidationRH(validationrhh)
    setIdchef(chefid)
    setIdrh(rhid)
    setEmailchef(emailche)
    setEmailemploye(emailemp)
    setDateAutorisationf(date_autorisationf)
    setUserNameF(user_name)
    setLastNamef(last_name)

  };
  const handleCloserefus = () => {
    setopenrefus(false);
  };

  const [opensupprimer, setopensupprimer] = useState(false);
  const[idcongesupp,setIdcongeSupp]=useState('')
  const handleClickOpensupprimer = (ids) => {
    setopensupprimer(true);
    setIdcongeSupp(ids)
  };
  const handleClosesupprimer = () => {
    setopensupprimer(false);
  };
   
    const { data: Conges = [] } = useFetch(url+"TestAutorisationsList/"+iduserinfo+"/"+iddep)
    const[congeIddelete,setcongeIddelete]=useState(null)
    const [open, setOpen] = useState(false);
    const useStyle = makeStyles({
      icon: {
        marginRight: 10,
        marginLeft: 10,
      







  
  
      }
    });
    const classes = useStyle()
    const SupprimerConge = (id) => {
      fetch(url+'SupressionConge/' + id, {
          method: 'DELETE',
          headers: {
  
              'Content-Type': 'application/json',
              Authorization:token
          },
      }).then(() => {
          setOpen(false);
          Mouchard("encours","supprim??",iduser,iduserinfo,"Suppression d'autorisation de "+ddebut+"au "+dfin)
          window.location.reload(false);
      }
      ).catch((e) => {

      /**  if ( e.response.status=== 401) {
            logoutfunction(e.response.status)
          } */
    })
  
  
  }
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };
  
  const ValiderConge =(id,iduser,heuredebut,heurefin,validation,validationrh) => {
  
 
     
    
    
      fetch(url+'RetrieveUpdateConge/' + id+"/"+validation+"/"+validationrh, {
          method: 'get',
          headers: {
          
            Authorization:token
        },
       
       
      }).then(() => {
        Mouchard("encours","confirm??",iduser,iduserinfo,"Validation d'autorisation de "+heuredebut+"au"+heurefin)

       window.location.reload(false)
    
    
      }
    
      ).catch((e) => {

      /**  if ( e.response.status=== 401) {
            logoutfunction(e.response.status)
          } */
    })
    }
  const RefuserConge = (id,iduser,heuredebut,heurefin,validation,validationrh) => {

      let List = {validation,validationrh }
    
    
      fetch(url+'RefusConge/' + id, {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              Authorization:token
          },
          body: JSON.stringify(List)
      }).then(() => {
        Mouchard("encours","refus??",iduser,iduserinfo,"Refus d'autorisation de " +heuredebut+"au "+heurefin)
       window.location.reload(false)
    
      }
    
      ).catch((e) => {

       /** if ( e.response.status=== 401) {
            logoutfunction(e.response.status)
          } */
    })
    }
    const[iduser,setIdUser]=useState('')
    const[ddebut,setddebut]=useState('')
    const[dfin,setdfin]=useState('')
    const sendMail= (email,objet,message) =>{
  
   
      fetch(url+"SendMail/"+email+"/"+objet+"/"+message , 
      {
        method : "POST" , 
        headers : {
         "Content-Type" : "application/json",
        
        },
       
      }).then(() =>{
       
  
    }).catch((e) => {

   /**   if ( e.response.status=== 401) {
          logoutfunction(e.response.status)
        } */
  })
    } 
    const onClick = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,date_autorisation,user_name,last_name) => {
            

      if (idchef==iduserinfo){
        if (validationn!=1){
      //  sendMail(emailchef,"IPS Time:  Avis favorable pour la demande d'autorisation "+user_name + "   " ,"Bonjour, La demande d'autorisation du collaborateur "+user_name + "   " + " de date "+date_autorisation+"  est valid?? avec un avis favorable !")

      sendMail(emailemploye,"IPS Time: Avis Favorable pour la demande d autorisation","Bonjour ,  Votre demande d'\ autorisation de date "+date_autorisation+" a ??t?? valid??e par un avis favorable officiel !")
      JSON.parse(emailsDRHS).map(x=>
x.id==iduserr?"":
        sendMail(x.email,"IPS Time:  Avis favorable par chef pour la demande d'autorisation  "+user_name + "   " ,"Bonjour, La demande d'autorisation du collaborateur "+user_name + "   " +" de  date "+date_autorisation+"  est valid?? avec un avis favorable par chef!")

        )
      const validation=1
    if (validationrhh==''){
      const validationrh=0
      return    ValiderConge(id,iduserr,date_autorisation,date_autorisation,validation,validationrh)

    }
    else{
      const validationrh=validationrhh
      return    ValiderConge(id,iduserr,date_autorisation,date_autorisation,validation,validationrh)

    }}else{
      alert('autorisation est d??ja valid??')
    }
      }

      else{
        alert('L employ?? de cette autorisation a un chef/RH')
      }
  
    {/**      else if(idrh==iduserinfo){
        if (validationrhh!=4){
        sendMail(emailemploye,"IPS Time:  Avis Favorable pour la demande d autorisation","Bonjour ,Votre RH a valid?? l'autorisation de date "+date_autorisation+" de votre demande    L'avis de chef est importante pour la confirmation d??finitive")
   
        const validationrh=4
        if (validationn==''){
          const validation=0
          return    ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

        }
        else{
          const validation=validationn
          return    ValiderConge(id,iduserr,datedebut,datefin,validation,validationrh)

        }
      }else {
        alert('autorisation est d??ja valid??')
      }
      } */}
    };
    const onClickRefuser = (id,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,date_autorisationf,user_name,last_name) => {
         
 

      if (idchef==iduserinfo){
        if (validationn!=2){
        //sendMail(emailchef,"IPS Time:  Avis d??favorable pour la demande d'autorisation "+user_name + "   " ,"Bonjour,  La demande d'autorisation du collaborateur "+user_name + "   " +"  de date "+date_autorisationf+"  est refus?? avec un avis d??favorable !")

        sendMail(emailemploye,"IPS Time: Avis d??favorable pour la demande d'autorisation","Bonjour , Votre demande d'autorisation de date "+date_autorisationf+"  a re??u un avis d??favorable officiel !")
        JSON.parse(emailsDRHS).map(x=>
          x.id==iduserr?"":     sendMail(x.email,"IPS Time:  Avis d??favorable par chef pour la demande du d'autorisation "+user_name + "   " ,"Bonjour, La demande d'autorisation du collaborateur "+user_name + "   " +"  de date "+date_autorisation+"  est refus?? avec un avis d??favorable par chef!")

        )
        const validation=2
   
    if (validationrhh==''){
      const validationrh=0
      return    RefuserConge(id,iduserr,date_autorisationf,date_autorisationf,validation,validationrh)

    }
    else{
      const validationrh=validationrhh
      return    RefuserConge(id,iduserr,date_autorisationf,date_autorisationf,validation,validationrh)

    }}else{
      alert('l autorisation est d??ja refus??')

    }
    
        }
   else{
          alert('L employ?? de cette autorisation a un chef/RH ')
        }
    {/**     else if(idrh==iduserinfo){

          if (validationrhh!=5){
          sendMail(emailemploye,"IPS Time: Avis d??favorable pour la demande d'autorisation","Bonjour ,    Votre RH a refus?? l' autorisation de date "+date_autorisationf+" de votre demande!   L'avis de chef est importante pour la confirmation d??finitive!  ")
         
          const validationrh=5
          if (validationn==''){
            const validation=0
            return    RefuserConge(id,iduserr,date_autorisationf,date_autorisationf,validation,validationrh)

          }
          else{
            const validation=validationn
            return    RefuserConge(id,iduserr,date_autorisationf,date_autorisationf,validation,validationrh)

          }
        }else{
          alert('l autorisation est d??ja refus??')
        }
       
        } */}
       
    };
    const onClickSupprimer = (ids) => {
      
  
      
      return  SupprimerConge(ids)
    };
    const onClickAnnuler = (id, iduserr, datedebut, datefin, validationn, validationrhh, idchef, idrh, emailemploye, emailchef, user_name, last_name) => {


      if (idchef == iduserinfo) {
  
        if (validationn = 1) {
       //  sendMail(emailchef,"IPS Time:  Avis d??favorable pour la demande du cong?? "+user_name  ,"Bonjour, La demande de cong?? du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est refus?? avec un avis d??favorable !")
  
          sendMail(emailemploye, "IPS Time: Avis d??favorable pour la demande du cong?? du " + datedebut + " au " + datefin, "Bonjour " + user_name + " " + "  La demande de cong??s du  " + datedebut + " au " + datefin + "   est annul?? avec un avis d??favorable officiel !")
          JSON.parse(emailsDRHS).map(x=>
            x.id==iduserr?"":    sendMail(x.email,"IPS Time:  Avis d??favorable par chef pour la demande du cong??  "+user_name ," Bonjour, La demande de cong?? du collaborateur "+user_name + "   " +"  du "+datedebut+" au "+datefin+"  est annul?? avec un avis d??favorable par chef !")
  
  
          )
          const validationAnu = 3
  
          if (validationrhh == '') {
            const validationrh = 0
            return Annulerautorisation(id, iduserr, datedebut, datefin, validationAnu,validationrh)
  
          }
          else {
            const validationrh = validationrhh
            return Annulerautorisation(id, iduserr, datedebut, datefin,validationAnu,validationrh)
  
          }
        } else {
          alert('le cong?? est d??ja refus??')
        }
      }
  
      else {
        alert('L employ?? de ce cong?? a un chef/RH ')
      }
     
    };
    const Annulerautorisation = (id, iduser, datedebut, datefin, validation,validationAnu, validationrh) => {

      let List = { validation, validationAnu,validationrh }
  
  
      fetch(url+'RefusConge/' + id, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization:token
        },
        body: JSON.stringify(List)
      }).then(() => {
        Mouchard("encours", "annul??", iduser,iduserinfo, "Refus de cong?? de " + datedebut + "au " + datefin)
  
  
        window.location.reload(false)
  
      }).catch((e) => {
  
       /** if ( e.response.status=== 401) {
            logoutfunction(e.response.status)
          } */
    })
    }
  
    $(document).ready(function () {
      $('#autotable').DataTable({
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
        ,"bDestroy": true,
        order:[[3,'asc'],[6,'asc']]
      })
  
    });

    return (  
        <div>
  <div className="container-fluid mt-5">
<div className="row">
  <div className="col">
  <div className="card shadow">
  <div className='card-header' style={{backgroundColor:"#5ac2df"}}>
      <h3 style={{color:"white"}}>Liste d'autorisations</h3>
      </div>
      <ScrollContainer className="scroll-container">
      {Conges.length==0?
    
    <Backdrop  open={true}>
  <CircularProgress  style={{top : '50%'}} color="black" />
  </Backdrop>
    : 
              <div className="table-responsive" id="ex">
 
   


         
                  
                  <table id="autotable" className="display" >

<thead>
  <tr>
  <th>Id </th>
    <th>Employ??</th>
    <th>Chef</th>
    <th>Avis Chef</th>

    <th>Avis RH</th>

    <th>date_autorisation</th>
    <th>Heure d??but</th>
    <th>Heure fin</th>

    <th className='text-center'>Action</th>
  </tr>
</thead>
<tbody>

  {Conges.map(c =>
    <tr>
      <td>{c.idconge}</td>
      <td>{c.user_name}</td>
      <td>{c.nomchef}</td>
      <td>{c.validation  ==0 ? "en_attente" : c.validation ==1 ? "valid?? par chef" : c.validation ==2 ? "refus?? par chef":c.validation ==3 ?"annul?? par chef":""}</td>
      
      <td>{c.validationrh ==0? "en_attente" :c.validationrh ==4 ? "valid?? par rh" : c.validationrh ==5 ? "refus?? par rh":c.validationrh ==6 ?"annul?? par rh":""}</td>
     
      <td>{c.date_autorisation}</td>
      
      <td>{c.heure_debut}</td>
      <td>{c.heure_fin}</td>
      <td>
        <tr>
        <td>        <a className="btn-sm btn-primary " data-toggle="modal" data-target={`#modalconge${c.idconge}`}  >
D??tails

              </a>
              <div className="modal fade" id={`modalconge${c.idconge}`}  role="dialog" aria-labelledby={`modalconge${c.idconge}`} aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel"></h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">  
          
          <div className='container'>
{/**          <div className='container pt-3'>

            
          <div class="row border border-dark" >
            <div class="col-6 border border-dark" style={{height:"50%"}}>Contact : {c.contact}</div>
            <div class="col-6 border border-dark"  style={{height:"50%"}}>Adresse :  {c.adresse}</div>
         
        </div>
        <div class="row border border-dark" >
            <div class="col-6 border border-dark" style={{height:"50%"}}>Personne int??rimaire: {c.personneinterimaire}</div>
            <div class="col-6 border border-dark"  style={{height:""}}>Commentaire:  {c.commentaire}</div>
         
        </div>

          </div> */}

      
           <table className=' border border-dark' >
            <tr>
              <th >Contact :</th>
              <td >{c.contact}</td>
            </tr>
            <tr>
              <th>Adresse :</th>
              <td>{c.adresse}</td>
            </tr>
            <tr>
              <th>Personne int??rimaire :</th>
              <td>{c.personneinterimaire}</td>
            </tr>
            <tr>
              <th>Commentaire :</th>
              <td>{c.commentaire}</td>
            </tr>
           </table>
        
           </div>


          </div>

        </div>
      </div>
   

</div></td>

{admin== true ?
""
:
c.validation==1  ?
<td>

&nbsp;
 <a  className="btn-sm btn-info " onClick={() => { handleClickOpenrefus(c.idconge, c.iduser, c.datedebut, c.datefin, c.validation, c.validationrh, c.chef_id, c.rh_id, c.emailemploye, c.email_chef, c.user_name, c.last_name) }} >

 Annuler
 
 </a>
 <Dialog

BackdropProps={{ invisible: true }}
className={classes.dialog}
open={openrefus}
onClose={handleCloserefus}
aria-labelledby="alert-dialog-title"
aria-describedby="alert-dialog-description"
>
<DialogTitle id="alert-dialog-title">
  {"Annuler un cong??"}
</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
    ??tes-vous s??r de vouloir annuler ce cong?? ?
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleCloserefus}>non</Button>
  <Button onClick={() => { onClickAnnuler(idcongerefus, iduserr, datedebut, datefin, validationn, validationrhh, idchef, idrh, emailemploye, emailchef, user_namef, last_namef) }}>
    oui
  </Button>
</DialogActions>
</Dialog>
 

 </td>
:
c.validation==3 ?
<td>
<a  className="btn-sm btn-success "  >

Valider

</a>
</td>
:
c.validation==2?
""
:
<>

          <td>
   
        <a className="btn-sm btn-success" onClick={()=>{handleClickOpenvalid(c.idconge,c.iduser,c.datedebut,c.datefin,c.validation,c.validationrh,c.chef_id,c.rh_id,c.emailemploye,c.email_chef,c.date_autorisation,c.user_name,c.last_name)}}>
      Valider
        
        </a>
        
        <Dialog

        BackdropProps={{ invisible: true }}
        className={classes.dialog}
        open={openvalid}
        onClose={handleClosevalid}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Valider une autorisation "}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ??tes-vous s??r de vouloir valider cette autorisation ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosevalid}>non</Button>
          <Button onClick={()=>{onClick(idcongev,iduserrv,datedebutv,datefinv,validationnv,validationrhhv,idchefv,idrhv,emailemployev,emailchefv,date_autorisation,user_namev,lastnamev)}}>
            oui
          </Button>
        </DialogActions>
        </Dialog>
          </td>
          <td>
         
          <a className="btn-sm btn-danger" onClick={()=>{handleClickOpenrefus(c.idconge,c.iduser,c.datedebut,c.datefin,c.validation,c.validationrh,c.chef_id,c.rh_id,c.emailemploye,c.email_chef,c.date_autorisation,c.user_name,c.last_name)}}>
     
        Refuser
        </a> 
        
        <Dialog
    
        BackdropProps={{ invisible: true }}
        className={classes.dialog}
        open={openrefus}
        onClose={handleCloserefus}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">
          {"Refuser une autorisation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ??tes-vous s??r de vouloir refuser cette autorisation ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloserefus}>non</Button>
          <Button onClick={()=>{onClickRefuser(idcongerefus,iduserr,datedebut,datefin,validationn,validationrhh,idchef,idrh,emailemploye,emailchef,date_autorisationf,user_namef,last_namef)}}>
            oui
          </Button>
        </DialogActions>
        </Dialog>
          </td>

          </>}

          
<td>
{rolename=="RH" || DRH == true || iddep!=undefined || admin==true? "":
<a className="btn-sm btn-info" onClick={()=>{handleClickOpensupprimer(c.idconge)}}>
        
Supprimer
    </a>}
    
    <Dialog

    BackdropProps={{ invisible: true }}
    className={classes.dialog}
    open={opensupprimer}
    onClose={handleClosesupprimer}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
    >
    <DialogTitle id="alert-dialog-title">
      {"Supprimer une autorisation"}
    </DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        ??tes-vous s??r de vouloir supprimer cette autorisation ?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClosesupprimer}>non</Button>
      <Button onClick={()=>{onClickSupprimer(idcongesupp)}}>
        oui
      </Button>
    </DialogActions>
    </Dialog>



        </td>
        </tr>
      </td>
    </tr>)}

</tbody>

</table>
         
 
    </div>}</ScrollContainer>


</div> 
</div></div></div></div>
    );
}
 
export default ListeAutorisations;