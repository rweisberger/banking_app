import React,  { createContext } from "react";

// SM: this is the only place where we call createContext
const UserContext = createContext(null);

/*
SM: I think this is leftover from the starter files, but the card logic could be moved to a separate file
If you choose to do so, make sure to add the following to the end of the file:
export default Card;
And make sure to update your imports
*/
function Card(props){
    function classes(){
        const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' txt-white';
        return 'card-mb-3 mx-auto mt-4' + bg + txt;
    }

    return(
        <div className={classes()} style={{maxWidth: "18rem"}}>
            <div className="card-header text-center"><b>{props.header}</b></div>
            <div className="card-body">
                <form>
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
                </form>
            </div>
        </div>
    );

}

// SM: This is a great idea, I would recommend pulling this out into its own file as well
// I want to style the alert
// function ModalAlert(props){
//     return(
//         <div class="modal fade" id="ModalAlert" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//             <div class="modal-dialog" role="document">
//                 <div class="modal-content">
//                 <div class="modal-header">
//                     <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                     <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                     <span aria-hidden="true">&times;</span>
//                     </button>
//                 </div>
//                 <div class="modal-body">
//                     {props.body}
//                 </div>
//                 <div class="modal-footer">
//                     <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                 </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// SM: If you remove Card from this file, you would have to update the export to:
// export default UserContext;
export {UserContext, Card};