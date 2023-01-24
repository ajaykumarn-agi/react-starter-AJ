import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import CardContent from "@mui/material/CardContent";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Checkbox } from "@arisglobal/agcp-ui";

const MongoConfig = (props) => {
  
  const handleChange = (event) => {
    props.parentMethod(event);
  };

  return (
    <Box
      component="form"
      sx={{ "& .MuiTextField-root": { m: 3, width: "55ch" } }}
      noValidate
      autoComplete="off"
    >
      <CardContent>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="Host"
            name="mongo.host"
            onChange={handleChange}
            value={props.publicDbData["mongo.host"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="Secondary Host"
            name="mongo.secondary.host"
            onChange={handleChange}
            required
            value={props.publicDbData["mongo.secondary.host"].value}
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="Port"
            name="mongo.port"
            value={props.publicDbData["mongo.port"].value}
            onChange={handleChange}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="User Name"
            name="mongo.username"
            value={props.publicDbData["mongo.username"].value}
            onChange={handleChange}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>

        <div>
          <TextField
            color="primary"
            fullWidth
            label="Password"
            onChange={handleChange}
            name="mongo.password"
            value={props.publicDbData["mongo.password"].value}
            required
            rows={1}
            size="small"
            type="password"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="Batch Size"
            name="mongo.batch.size"
            value={props.publicDbData["mongo.batch.size"].value}
            onChange={handleChange}
            required
            rows={1}
            size="small"
            type="number"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="AERS DB"
            onChange={handleChange}
            name="mongo.dbname.1002"
            value={props.publicDbData["mongo.dbname.1002"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="AERS Default Suspect"
            onChange={handleChange}
            name="prodrole.suspect"
            value={props.publicDbData["prodrole.suspect"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="start"
              control={
                <Checkbox
                  name="exclude.dup.cases"
                  checked={props.publicDbData["exclude.dup.cases"].value}
                  onClick={handleChange}
                />
              }
              label="AERS Exclude Duplicate Cases"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="include.suspect.cases"
                  checked={props.publicDbData["include.suspect.cases"].value}
                  onClick={handleChange}
                />
              }
              value="start"
              label="AERS Include Suspect Cases "
              labelPlacement="start"
            />
          </FormGroup>
        </div>

        <div>
          <TextField
            color="primary"
            fullWidth
            label="MAUDE DB"
            onChange={handleChange}
            name="mongo.dbname.1023"
            value={props.publicDbData["mongo.dbname.1023"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="VAERS DB"
            onChange={handleChange}
            name="mongo.dbname.1003"
            value={props.publicDbData["mongo.dbname.1003"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="VIGIBASE DB"
            onChange={handleChange}
            required
            name="mongo.dbname.1143"
            value={props.publicDbData["mongo.dbname.1143"].value}
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
          <TextField
            color="primary"
            fullWidth
            label="Vigibase Default Suspect"
            onChange={handleChange}
            name="vigibase.prodrole.suspect"
            value={props.publicDbData["vigibase.prodrole.suspect"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
        <div>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              control={
                <Checkbox
                  name="exclude.vigibase.dup.cases"
                  checked={
                    props.publicDbData["exclude.vigibase.dup.cases"].value
                  }
                  onClick={handleChange}
                />
              }
              label="Vigibase Exclude Duplicate Cases"
              labelPlacement="start"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="include.vigibase.suspect.cases"
                  checked={
                    props.publicDbData["include.vigibase.suspect.cases"].value
                  }
                  onClick={handleChange}
                />
              }
              label="Vigibase Include Suspect Cases"
              labelPlacement="start"
            />
          </FormGroup>
        </div>
        <div>
          <TextField
            color="primary"
            fullWidth
            label="PMDA DB"
            onChange={handleChange}
            name="mongo.dbname.1077"
            value={props.publicDbData["mongo.dbname.1077"].value}
            required
            rows={1}
            size="small"
            type="text"
            variant="outlined"
          />
        </div>
      </CardContent>
    </Box>
  );
};

export default MongoConfig;
