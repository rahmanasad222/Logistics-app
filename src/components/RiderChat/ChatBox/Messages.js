import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";

const Messages = () => {
  const messages = useSelector((state) => state.riderMessages.messages);
  const state = useSelector((state) => state);
  const name1 = useSelector((state) => state.riderChatData.data.name1);

  return (
    <>
      {messages ? (
        <div>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h5" className="header-message">
                Chat
              </Typography>
            </Grid>
          </Grid>
          <Grid container component={Paper}>
            <Grid item xs={3}>
              <List>
                <ListItem button key="RemySharp">
                  <ListItemIcon>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://material-ui.com/static/images/avatar/1.jpg"
                    />
                  </ListItemIcon>
                  <ListItemText primary={name1}></ListItemText>
                </ListItem>
              </List>
              <Divider />
            </Grid>
            <Grid item xs={9}>
              <div style={{ height: "450px", overflowY: "scroll" }}>
                {messages.map((message) => {
                  return (
                    <div>
                      <List key={message.id}>
                        <ListItem>
                          <Grid container>
                            <Grid item xs={12}>
                              <ListItemText
                                align="right"
                                primary={message.description}
                              ></ListItemText>
                            </Grid>
                            <Grid item xs={12}>
                              <ListItemText
                                align="right"
                                secondary="09:30"
                              ></ListItemText>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                    </div>
                  );
                })}
              </div>
              <Divider />
            </Grid>
          </Grid>
        </div>
      ) : null}
    </>
  );
};

export default Messages;
