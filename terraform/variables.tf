variable "aws_region" {
  description = "AWS region"
  type        = string
  default     = "eu-west-1"
}

variable "cache_ttl_min" {
  description = "CloudFront cache ttl min"
  type        = number
}

variable "cache_ttl_default" {
  description = "CloudFront cache ttl default"
  type        = number
}

variable "cache_ttl_max" {
  description = "CloudFront cache ttl max"
  type        = number
}

variable "block_ofac_countries" {
  description = "flag to block ofac countries"
  type        = bool
  default     = false
}

#######################################
# CI injected variables
#######################################
variable "deploy_repo" {
  description = "CI injected variable, application's repo name"
  type    = string
  default = "sharedactions"
}

variable "deploy_env" {
  description = "CI injected variable, deployment environment"
  type    = string
  default = "dev"
}

variable "pipeline_token" {
  description = "CI injected variable, pipeline token"
  type    = string
  default = ""
}

variable "access_control_max_age_sec" {
  description = "Access control maximum age"
  type    = number
  default = 31536000
}

variable "is_policy_enabled" {
  description = "whether we required security headers or not"
  type    = bool
  default = true
}
