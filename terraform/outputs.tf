output "cloudfront_distribution_id" {
  value = module.static_website.cloudfront_distribution_id
}
  
output "s3_bucket_name" {
  value = module.static_website.s3_bucket_name
}

output "cloudfront_distribution_arn" {
  value = module.static_website.cloudfront_distribution_arn
}

output "s3_bucket_id" {
  value = module.static_website.s3_bucket_id
}

output "s3_bucket_arn" {
  value = module.static_website.s3_bucket_arn
}

output "s3_bucket_domain_name" {
  value = module.static_website.s3_bucket_domain_name
}

output "s3_bucket_regional_domain_name" {
  value = module.static_website.s3_bucket_regional_domain_name
}
