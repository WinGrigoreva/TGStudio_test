import { inject, observer } from "mobx-react";
import React from "react";
import { MainInfo } from "../common/MainInfo";
import { Header } from "../Header";
import { Modal } from "../Modal";
import { ContentTable } from "../table/ContentTable";

@inject("usersStoreProp")
@observer
export class MainPage extends React.Component {
    render() {
        const _usersStore = this.props.usersStoreProp;
        return (            
            <>
                <Header />
                {_usersStore.isModalShow
                    ? <Modal handleCloseModal={_usersStore.closeModal} title={_usersStore.getTitle}>
                        {_usersStore.isError ? <h2>{_usersStore.errorMessage}</h2> : <MainInfo user={_usersStore.getRandomUser} />}
                      </Modal>
                    : ""}
                <ContentTable />
            </>
        )
    }
}