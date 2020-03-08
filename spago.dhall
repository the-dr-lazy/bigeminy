{-
Welcome to a Spago project!
You can edit this file as you like.
-}
{ name = "bigeminy"
, dependencies = [ "console", "effect", "psci-support", "functions", "maybe", "nullable" ]
, packages = ./packages.dhall
, sources = [ "src/**/*.purs" ]
}
