# Terraform

## Usage

A `terraform.yml` GitHub Actions workflow has been provided under `.github\workflow` directory to trigger the infrastructure CI/CD either through manual trigger, or code push or PR creation for terraform code changes.  Terraform commands used in the workflow are explained in details below.

*For local execution of the Terraform commands, you'll need to install Terraform CLI if you haven't already done so. The instructions can be found here: https://learn.hashicorp.com/tutorials/terraform/install-cli.*

Make sure you've updated **terraform.tfvars** to indicate your aws profile and region before creating.

```bash
terraform init -backend-config='./.env/dev/backend.tfvars'
terraform get
terraform plan -input=false -var-file='./.env/dev/terraform.tfvars' -no-color
terraform apply -input=false -var-file='./.env/dev/terraform.tfvars' --auto-approve
terraform destroy -input=false -var-file='./.env/dev/terraform.tfvars'
```
  
### `terraform get`

*The `terraform get` command is used to download and update modules mentioned in the root module (https://www.terraform.io/docs/commands/get.html).*

**Note:** When installing a remote module, Terraform will download it into the .terraform directory in your configuration's root directory. When installing a local module, Terraform will instead refer directly to the source directory. Because of this, Terraform will automatically notice changes to local modules without having to re-run terraform init or terraform get.

### `terraform plan -input=false -var-file='./.env/dev/terraform.tfvars'

*The `terraform plan` command is used to create an execution plan. This command is a convenient way to check whether the execution plan for a set of changes matches your expectations without making any changes to real resources or to the state. For example, `terraform plan` might be run before committing a change to version control, to create confidence that it will behave as expected (https://www.terraform.io/docs/commands/plan.html).*

`-input=false` specifies that we don't want prompted for input for variables not directly set.

`-var-file='./.env/dev/terraform.tfvars'` specifies that we want to specify variables in our terraform configuration from the **terraform.tfvars** file.

### `terraform apply -input=false -var-file='./.env/dev/terraform.tfvars'`

*The `terraform apply` command is used to apply the changes required to reach the desired state of the configuration. (https://www.terraform.io/docs/commands/apply.html).*

`-input=false` specifies that we don't want prompted for input for variables not directly set.

`-var-file='./.env/dev/terraform.tfvars'` specifies that we want to specify variables in our terraform configuration from the **terraform.tfvars** file.

