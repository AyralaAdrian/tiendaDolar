import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { getColor } from '../../utils/index';

import './UsersStats.css';

export const UsersStats = () => {
    const [users, setUsers] = useState([]);
    const [status, setStatus] = useState('idle');
    
    useEffect(() => {
        setStatus('loading')
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then( (response) =>{
                setUsers(response.data);
                setStatus('resolved');
                console.log(response.data)
            })
            .catch(() => {
                console.warn("error")
                setStatus('rejected')
            })
    }, []);

    return (
        <div className='users'>
            {
                status === 'loading' && (
                    <p className="loading">Cargando Estadisticas</p>
                )
            }
            {
                status === 'resolved' && (
                    <aside>
                        <h2 className='users-label'>Estadisticas</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>User</th>
                                    <th>Segundo de Click</th>
                                    <th>Color</th>
                                </tr>
                            </thead>
                            <tbody>
                            { 
                                users.map(user => {
                                    const segundo = Math.floor(Math.random() * 60);
                                    return (
                                        <tr key={user.id}>
                                            <td>{`${user.username}`}</td> 
                                            <td>{`${segundo}s`}</td> 
                                            <td style={{background: getColor(segundo)}}>&nbsp;</td>     
                                        </tr>
                                    )
                                })
                            }
                            </tbody>
                        </table>
                    </aside>
                )
            }
            {
                status === 'rejected' && (
                    <p className="failed">Se produjo un error cargando Estadisticas</p>
                )
            }
        </div>
    )
}