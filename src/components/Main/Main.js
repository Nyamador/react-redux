import React from 'react';
import './Main.css';
import Empty from '../Empty/Empty';
import chatWindow from '../chatWindow/chatWindow';

const Main = ({ user, activeUserId }) => {
        const renderMainContent = () => {
                if (!activeUserId){
                        return <Empty user={user} activeUserId={activeUserId}/>;
                }else{
                        return <chatWindow activeUserId={activeUserId}/>
                }
        };

        return <main className="Main">{renderMainContent()}</main>
}

export default Main;
