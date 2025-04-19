terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 3.0"
    }
  }
}

provider "docker" {
  host = "npipe:////./pipe/docker_engine"  # For Windows
}

resource "docker_image" "mern_app" {
  name         = "royal-respite"
  keep_locally = false
  build {
    context = "."
  }
}

resource "docker_container" "mern_container" {
  name  = "mern_app"
  image = docker_image.mern_app.image_id

  ports {
    internal = 3000  # Inside the container
    external = 3000  # Available on localhost
  }
}
