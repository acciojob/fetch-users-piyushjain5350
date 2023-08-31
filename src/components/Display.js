import React ,{useState} from "react";
import axios from 'axios';

const Display=()=>{
    const [fetchData, setFetchData]=useState('');
    
    function handlingFn(){

        axios.get('https://reqres.in/api/users')
        .then(res=>{
            setFetchData(res.data.data);
            console.log(res.data.data)})
        .catch(err=>console.log(err));
    }

    return(
        // <div className="display">
        //     <div className="heading-cc">
        //         <p>Blue whales</p>
        //         <button className="btn" type="submit" onClick={handlingFn}>Get User List</button>
        //     </div>
        //     <div>
        //         <table>
        //             <thead>
        //                 <th>First Name</th>
        //                 <th>last Name</th>
        //                 <th>Email</th>
        //                 <th>Avatar</th>
        //             </thead>
        //             <tbody>
        //                 {
        //                     !fetchData&& <li>No data found to display.</li>
        //                 }
        //                 {
        //                     fetchData&&fetchData.map(item=>(
        //                         <tr key={item.id}>
        //                             <td>{item.first_name}</td>
        //                             <td>{item.last_name}</td>
        //                             <td>{item.email}</td>
        //                             <td><img src={item.avatar} alt="" /></td>
        //                         </tr>
        //                     ))
        //                 }
        //             </tbody>
        //         </table>
        //     </div>

        // </div>
        <div>
        <button className='btn' onClick={handlingFn}>Get User List</button>
        <table>
            <thead>
                <tr>
                   <th>First Name</th> 
                   <th>Last Name</th> 
                   <th>Email</th> 
                   <th>Avatar</th> 
                </tr>
            </thead>
            <tbody>
                {
                (fetchData.length==0)? <p>No data found to display.</p> : fetchData.map(element => {
                    return(
                        <tr>
                            <td>{element.first_name}</td>
                            <td>{element.last_name}</td>
                            <td>{element.email}</td>
                            <td><img 
                            src= {element.avatar}/></td>
                        </tr>
                    )
                  })
                }
            </tbody>
        </table>
       </div>
    )
}

export default Display;
