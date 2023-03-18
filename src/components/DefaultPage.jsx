import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {Box, Button, Container, Grid, Typography} from "@material-ui/core";
import {MyTextFieldSmall} from "../utils";
import {
    setLoginStatus,
    setPassword,
    setPerm
} from "../store/default_page/actions";
import {LockOpen} from "@material-ui/icons";
import {Permissions} from "./Permissions";


const styles = {
    root: {
        minWidth: 300,
        maxWidth: 300,
        minHeight: 500,
        maxHeight: 500,
        marginTop: 35,
        // textAlign: "center",
        backgroundColor: 'gray'
    },
    root_container: {
        marginLeft: 0,
    },
    logo_img: {
        margin: 20,
        marginLeft: 10,
        float: "left",
    },
    logo_text: {
        marginTop: 35,
        float: "left",
        fontSize: 34,
        fontFamily: "BlinkMacSystemFont",
        color: "rgba(77,82,89,0.76)"
    },
    password_field: {
        margin: 10,
        paddingTop: 150,
    },

    page_header_text: {
        float: "left",
        margin: 20,
        marginLeft: 0,
        marginBottom: 30,
        fontSize: 18,
        color: "rgba(77,82,89,0.76)"
    },
    perm_item_text: {
        color: "rgba(68,72,75,0.75)",
        fontSize: 18,
        fontWeight: 1,
    }
}

const button_unlock_style = {
    marginLeft: 10,
    backgroundColor: "rgba(56,82,121,0.76)",
    color: "rgba(192,193,197,0.76)",
    minWidth: 232
}

function Logo(props) {
    const {classes} = props;

    return (
        <div>
            <div className={classes.logo_img}>
                <img src={require('../logo.png')} alt="web3cat" width="64" height="64" />
            </div>
            <div className={classes.logo_text}>
                <Typography variant="h4">Web3Cat</Typography>
            </div>
        </div>
    )
}

function LoginPage(props) {
    const {classes, password, handleChangePassword, handleUnlockButtonClick} = props;

    return (
        <Container maxWidth="md" className={classes.root_container}>
            <Grid item xs={12}>
                <Logo classes={classes}/>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.password_field}>
                    {MyTextFieldSmall("Password", password, false,
                        handleChangePassword, false, "text")}
                </div>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.button}>
                    <Box display="flex" justifyContent="flex-start">
                        <Button
                            style={button_unlock_style}
                            variant="contained"
                            size="small"
                            onClick={() => {
                                handleUnlockButtonClick()
                            }}
                        >
                            <LockOpen/>
                            Unlock
                        </Button>
                    </Box>
                </div>
            </Grid>
        </Container>
    );
}


class DefaultPage extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    handleChangePassword = (password) => {
        this.props.setPassword(password);
    }

    render() {
        const {classes, password, login_status, perms} = this.props;

        const handleUnlockButtonClick = () => {
            this.props.setLoginStatus(true);
        }

        const handleChangeSwitch = (name, value) => {
            this.props.setPerm(name, value);
        }

        // console.log(window)
        // TODO window
        //  взять переменную/маркер сайта из window. Типа window.web3cat

        // TODO: html/js Injection (передать туда фильтрованный perm_list)
        // alert('sdfdsfsd')
        console.log('chrome', chrome.tabs)

        return (
            <div className={classes.root}>
                {/*{chrome.tabs.getCurrent(function(tab) {<div>{tab.title}</div>})}*/}
                {/*{chrome.tabs.query({*/}
                {/*    active: true,*/}
                {/*    lastFocusedWindow: true*/}
                {/*}, function(tabs) {*/}
                {/*    // and use that tab to fill in out title and url*/}
                {/*    var tab = tabs[0];*/}
                {/*    console.log(tab.url);*/}
                {/*    alert(tab.url);*/}
                {/*})}*/}

                {login_status?
                    <Permissions
                        classes={classes}
                        perms={perms}
                        handleChangeSwitch={handleChangeSwitch}
                    />
                    :<LoginPage
                        classes={classes}
                        password={password}
                        handleChangePassword={this.handleChangePassword}
                        handleUnlockButtonClick={handleUnlockButtonClick}
                    />
                }
                {/*<Information*/}
                {/*    classes={classes}*/}
                {/*    perm_list={perm_list}*/}
                {/*/>*/}
            </div>
        );
    }
}

const putStateToProps = (state) => {
    return {
        password: state.default_page.password,
        login_status: state.default_page.login_status,

        perm_list: state.default_page.perm_list,
        perms: state.default_page.perms,
    };
};

const putActionsToProps = (dispatch) => {
    return {
        setPassword: bindActionCreators(setPassword, dispatch),
        setLoginStatus: bindActionCreators(setLoginStatus, dispatch),
        setPerm: bindActionCreators(setPerm, dispatch),
    };
};

export default connect(putStateToProps, putActionsToProps)(withStyles(styles)(DefaultPage));