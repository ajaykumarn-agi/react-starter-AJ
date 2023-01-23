#######################################
# Provider
#######################################
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "4.45.0"
    }
  }
  required_version = "~> 1.3.6"
}

provider "aws" {
  region = var.aws_region
}

data "aws_ssm_parameter" "cert" {
  name = "/AG/base/agcloudCertificateArn"
}

#######################################
# module for static website
#######################################
module "static_website" {
  source = "github.com/arisglobal/sharedactions//terraform/modules/s3_cloudfront?ref=latest"
  name   = "${var.deploy_repo}-${var.deploy_env}-static-website"

  s3_bucket_name       = "${var.deploy_repo}-${var.deploy_env}"
  dns_name             = "${var.deploy_repo}-${var.deploy_env}.agcloud.bz"
  acm_certificate_arn  = data.aws_ssm_parameter.cert.value
  block_ofac_countries = var.block_ofac_countries

  cache_ttl = {
    min     = var.cache_ttl_min
    default = var.cache_ttl_default
    max     = var.cache_ttl_max
  }

  deploy_repo                = var.deploy_repo
  deploy_env                 = var.deploy_env
  pipeline_token             = var.pipeline_token
  access_control_max_age_sec = var.access_control_max_age_sec
  is_policy_enabled          = var.is_policy_enabled
}
