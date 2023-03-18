import React from "react";
import {Container, Grid, Switch, Typography} from "@material-ui/core";
import {getKey, getPermShortName} from "../utils";


const switch_style = {
    marginLeft: 20,
    color: "rgba(68,72,75,0.75)",
    fontSize: 18
}

const switch_style_text = {
    marginTop: 8,
    marginLeft: 20,
    color: "rgba(68,72,75,0.75)",
    fontSize: 18,
    fontWeight: 1,
}


function PermissionItem(props) {
    const { name, value, handleChangeSwitch } = props

    return (
        <Grid container spacing={1}>
            <Grid item xs={6}>
                <div style={switch_style_text}>{getPermShortName(name)}</div>
            </Grid>
            <Grid item xs={6}>
                <div style={switch_style}>
                    <Switch
                        checked={value}
                        onChange={(e) => handleChangeSwitch(name, e.target.checked)}
                        color="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export function Permissions(props) {
    const { classes, perms, handleChangeSwitch } = props;

    return (
            <Container maxWidth="md" className={classes.root_container}>
                <Grid item xs={12}>
                    <Typography variant="h4" className={classes.page_header_text}>
                        Permissions
                    </Typography>
                </Grid>
                {
                    Object.entries(perms).map(
                        ( [key, value] ) => (
                            <PermissionItem
                                name={key}
                                value={value}
                                handleChangeSwitch={handleChangeSwitch}
                                key={getKey()}
                            />
                        ))
                }
            </Container>
        );
}
