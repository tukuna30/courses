/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import TextField from '@material-ui/core/TextField';
import './Details.css';

const Detail = () => {
    const { id } = useParams();
    const history = useHistory();
    const [error, setError] = useState('');
    const [user, setUser] = useState({});
    const [toastMessage, setToastMessage] = useState('');

    const [isToastOpen, setIsToastOpen] = useState(false);

    useEffect(async () => {
        try {
            const rawRsponse = await fetch(`http://localhost:5001/user/${id}`, {
                method: 'GET',
                credentials: 'include'
            });
            console.log('raw response', rawRsponse);

            if (!rawRsponse.ok) {
                if (rawRsponse.status === 401);
                setError('You need to login!');
                setTimeout(() => {
                    history.push('/login');
                }, 1500);

                return;
            }
            const jsonResponse = await rawRsponse.json();

            console.log('json response', jsonResponse, 'user detail');
            setUser(jsonResponse.user);
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    }, []);

    const updateUser = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const saveUserDetails = async (event) => {
        event.preventDefault();
        if (!user.firstName) {
            setToastMessage('User name can not be blank');
            setIsToastOpen(true);
            return;
        }

        try {
            console.log('user save in progress', user);
            const rawRsponse = await fetch(`http://localhost:5001/user/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });

            if (!rawRsponse.ok) {
                setError('something not ok', rawRsponse.status);
            } else {
                const jsonResponse = await rawRsponse.json();

                console.log('json response user save', jsonResponse, 'user detail');
                setUser(jsonResponse.user);
                setToastMessage('Your profile is saved');
                setIsToastOpen(true);
            }
        } catch (_error) {
            console.log('error', _error.message);
            setError(_error.message);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            {/*<div>User Detail page</div>*/}
            {error.length > 0 ? <div>Error fetching the data: {error}</div> : null}
            {/*<div>Details about particular item with id: {id}</div>*/}

            {(() => {
         
         /*For id 1 */
                   if (id==1) {
                     return <form>

                     <h3>1) What does HTML stands for?</h3>
                     <input type="radio" value="htmlq1" name="htmlq1"></input>
                     <span>Hypertext Machine language.</span>
                     <br></br>
                     <input type="radio" value="htmlq1" name="htmlq1"></input>
                     <span>Hypertext and links markup language.</span>
                     <br></br>
                     <input type="radio" value="htmlq1" name="htmlq1"></input>
                     <span>Hypertext Markup Language.</span>
                     <br></br>
                     <input type="radio" value="htmlq1" name="htmlq1"></input>
                     <span>Hightext machine language.</span>
                     
                     <h3>2) Which of the following characters indicate closing of a tag?</h3>
                     <input type="radio" value="htmlq2" name="htmlq2"></input>
                     <span>.</span>
                     <br></br>
                     <input type="radio" value="htmlq2" name="htmlq2"></input>
                     <span>/</span>
                     <br></br>
                     <input type="radio" value="htmlq2" name="htmlq2"></input>
                     <span>\</span>
                     <br></br>
                     <input type="radio" value="htmlq2" name="htmlq2"></input>
                     <span>!</span>
                     
                     <h3>3) What is the font-size of the h1 heading tag?</h3>
                     <input type="radio" value="htmlq3" name="htmlq3"></input>
                     <span>3.5 em</span>
                     <br></br>
                     <input type="radio" value="htmlq3" name="htmlq3"></input>
                     <span>2.17 em</span>
                     <br></br>
                     <input type="radio" value="htmlq3" name="htmlq3"></input>
                     <span>2 em</span>
                     <br></br>
                     <input type="radio" value="htmlq3" name="htmlq3"></input>
                     <span>1.5 em</span>
                     
                     
                     <h3>4) Which of the following attributes is used to add link to any element?</h3>
                     <input type="radio" value="htmlq4" name="htmlq4"></input>
                     <span>link</span>
                     <br></br>
                     <input type="radio" value="htmlq4" name="htmlq4"></input>
                     <span>ref</span>
                     <br></br>
                     <input type="radio" value="htmlq4" name="htmlq4"></input>
                     <span>href</span>
                     <br></br>
                     <input type="radio" value="htmlq4" name="htmlq4"></input>
                     <span>newref</span>

                     <h3>5) What is the purpose of using div tags in HTML?</h3>
                     <input type="radio" value="htmlq5" name="htmlq5"></input>
                     <span>For creating Different styles.</span>
                     <br></br>
                     <input type="radio" value="htmlq5" name="htmlq5"></input>
                     <span>For creating different sections.</span>
                     <br></br>
                     <input type="radio" value="htmlq5" name="htmlq5"></input>
                     <span>For adding headings.</span>
                     <br></br>
                     <input type="radio" value="htmlq5" name="htmlq5"></input>
                     <span>For adding titles.</span>
                     
                     <br></br>
                     <input type="submit" value="Submit"></input>
                     
                     </form>
         ;
                   }
         
                 /*For id 2 */
                   else if (id==2) {

                     return <form>
                     <h3>1) What does CSS stand for?</h3>
                     <input type="radio" value="cssq1" name="cssq1"></input>
                     <span>Creative Style Sheet.</span>
                     <br></br>
                     <input type="radio" value="cssq1" name="cssq1"></input>
                     <span>Cascading style Sheet.</span>
                     <br></br>
                     <input type="radio" value="cssq1" name="cssq1"></input>
                     <span>Computer Style Sheet.</span>
                     <br></br>
                     <input type="radio" value="cssq1" name="cssq1"></input>
                     <span>Colorful Style Sheet.</span>
                     
                     <h3>2)  Which of the following property is used to control the position of an image in the background?</h3>
                     <input type="radio" value="cssq2" name="cssq2"></input>
                     <span>background-color.</span>
                     <br></br>
                     <input type="radio" value="cssq2" name="cssq2"></input>
                     <span>background-image.</span>
                     <br></br>
                     <input type="radio" value="cssq2" name="cssq2"></input>
                     <span>background-repeat</span>
                     <br></br>
                     <input type="radio" value="cssq2" name="cssq2"></input>
                     <span>background-position</span>
                     
                     <h3>3) Which of the following property is used to set the color of a text?</h3>
                     <input type="radio" value="cssq3" name="cssq3"></input>
                     <span>color</span>
                     <br></br>
                     <input type="radio" value="cssq3" name="cssq3"></input>
                     <span>direction</span>
                     <br></br>
                     <input type="radio" value="cssq3" name="cssq3"></input>
                     <span>letter-spacing</span>
                     <br></br>
                     <input type="radio" value="cssq3" name="cssq3"></input>
                     <span>word-spacing</span>
                     
                     
                     <h3>4) Which of the following property is used to control the flow and formatting of text?</h3>
                     <input type="radio" value="cssq4" name="cssq4"></input>
                     <span>white-space.</span>
                     <br></br>
                     <input type="radio" value="cssq4" name="cssq4"></input>
                     <span>text-shadow.</span>
                     <br></br>
                     <input type="radio" value="cssq4" name="cssq4"></input>
                     <span>text-decoration.</span>
                     <br></br>
                     <input type="radio" value="cssq4" name="cssq4"></input>
                     <span>text-transform</span>

                     <h3>5) Which of the following property specifies whether a border should be solid, dashed line, double line, or one of the other possible values?</h3>
                     <input type="radio" value="cssq5" name="cssq5"></input>
                     <span>:border-color.</span>
                     <br></br>
                     <input type="radio" value="cssq5" name="cssq5"></input>
                     <span>:border-style.</span>
                     <br></br>
                     <input type="radio" value="cssq5" name="cssq5"></input>
                     <span>:border-width.</span>
                     <br></br>
                     <input type="radio" value="cssq5" name="cssq5"></input>
                     <span>:border-bottom-color.</span>
                     
                     <br></br>
                     
                     <input type="submit" value="Submit"></input>
                     
                     </form>
         ;
                   }
         
                     /*For id 3 */
                     else if (id==3) {
                         return <form>

                             <h3>1) Which of the following is true about variable naming conventions in JavaScript?</h3>
                     <input type="radio" value="jsq1" name="jsq1"></input>
                     <span>JavaScript variable names must begin with a letter or the underscore character.</span>
                     <br></br>
                     <input type="radio" value="jsq1" name="jsq1"></input>
                     <span>JavaScript variable names are case sensitive.</span>
                     <br></br>
                     <input type="radio" value="jsq1" name="jsq1"></input>
                     <span>Both of the above.</span>
                     <br></br>
                     <input type="radio" value="jsq1" name="jsq1"></input>
                     <span>None of the above.</span>
                     
                     <h3>2) How can you get the type of arguments passed to a function?</h3>
                     <input type="radio" value="jsq2" name="jsq2"></input>
                     <span>using typeof operator.</span>
                     <br></br>
                     <input type="radio" value="jsq2" name="jsq2"></input>
                     <span>using getType function.</span>
                     <br></br>
                     <input type="radio" value="jsq2" name="jsq2"></input>
                     <span>Both of the above.</span>
                     <br></br>
                     <input type="radio" value="jsq2" name="jsq2"></input>
                     <span>None of the above.</span>
                     
                     <h3>3) Which built-in method combines the text of two strings and returns a new string?</h3>

                     <input type="radio" value="jsq3" name="jsq3"></input>
                     <span>append()</span>
                     <br></br>
                     <input type="radio" value="jsq3" name="jsq3"></input>
                     <span>concat()</span>
                     <br></br>
                     <input type="radio" value="jsq3" name="jsq3"></input>
                     <span>attach()</span>
                     <br></br>
                     <input type="radio" value="jsq3" name="jsq3"></input>
                     <span>None of the above.</span>
                     
                     
                     <h3>4) Which built-in method returns the calling string value converted to lower case?</h3>
                     <input type="radio" value="jsq4" name="jsq4"></input>
                     <span>toLowerCase()</span>
                     <br></br>
                     <input type="radio" value="jsq4" name="jsq4"></input>
                     <span>toLower()</span>
                     <br></br>
                     <input type="radio" value="jsq4" name="jsq4"></input>
                     <span>changeCase(case)</span>
                     <br></br>
                     <input type="radio" value="jsq4" name="jsq4"></input>
                     <span>None of the above.</span>

                     <h3>5) Which of the following function of Number object defines how many total digits to display of a number?</h3>
                     <input type="radio" value="jsq5" name="jsq5"></input>
                     <span>toExponential().</span>
                     <br></br>
                     <input type="radio" value="jsq5" name="jsq5"></input>
                     <span>toFixed().</span>
                     <br></br>
                     <input type="radio" value="jsq5" name="jsq5"></input>
                     <span>C - toLocaleString().</span>
                     <br></br>
                     <input type="radio" value="jsq5" name="jsq5"></input>
                     <span>toPrecision().</span>

                         <br></br>
                         <input type="submit" value="Submit"></input>
                         
                         </form>
             ;
                       }
         
                         /*For id 4 */
                   else if (id==4) {
                     return <form>
                     <h3>What is ReactJS ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <br></br>
                     <input type="submit" value="Submit"></input>
                     
                     </form>
         ;
                   }
         
                     /*For id 5 */
                     else if (id==5) {
                         return <form>
                         <h3>What is NodeJS ?</h3>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         
                         <h3>What is HTML ?</h3>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         
                         <h3>What is HTML ?</h3>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         
                         <h3>What is HTML ?</h3>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         
                         <h3>What is HTML ?</h3>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <input type="radio" value="abc"></input>
                         <br></br>
                         <input type="submit" value="Submit"></input>
                         
                         </form>
             ;
                       }
         
                         /*For id 6 */
                   else if (id==6) {
                     return <form>
                     <h3>What is MongoDB ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     
                     <h3>What is HTML ?</h3>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <input type="radio" value="abc"></input>
                     <br></br>
                     <input type="submit" value="Submit"></input>
                     
                     </form>
         ;
                   }
         
                 })()}
          
           
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isToastOpen}
                onClose={() => {
                    setIsToastOpen(false);
                }}
                autoHideDuration={5000}
                message={toastMessage}
                key="profile_save"
            />
            {user.firstName && (
                <>
                    <div>User name: {user.firstName}</div>
                    <div>User last name: {user.lastName}</div>
                    <form>
                        <div>
                            <TextField
                                required
                                id="standard-required"
                                label="First Name"
                                defaultValue={user.firstName}
                                onChange={updateUser}
                                placeholder="First Name"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="lastName"
                                value={user.lastName}
                                onChange={updateUser}
                                placeholder="Last Name"
                            />
                        </div>
                        <input
                            type="submit"
                            value="Save"
                            onClick={(e) => {
                                saveUserDetails(e);
                            }}
                        />
                    </form>
                </>
            )}
        </div>
    );
};

export default Detail;
