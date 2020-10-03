import React from "react";
import { inject, observer } from "mobx-react";
import InfiniteScroll from 'react-infinite-scroll-component';
import s from "./ContentTable.module.sass"

import { RowTable } from "../RowTable"

@inject("usersStoreProp")
@observer
export class ContentTable extends React.Component {
    render() {
        const _usersStore = this.props.usersStoreProp;
        return ( 
            <div className={s["users-table"]}>
            <InfiniteScroll
                dataLength={_usersStore.users.length} //This is important field to render the next data
                next={_usersStore.getNext}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                {_usersStore.users.map((e) => {
                    return <RowTable user={e} key={e.login.uuid}/>
                })}
            </InfiniteScroll>
            </div>
        )
    }
}