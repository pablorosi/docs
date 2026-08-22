---
title: Azure Resource Manager Template
date: 2026-08-05
tags:
  - azure
---
* ARM templates are JSON files that define the infrastructure and configuration for your deployment.
* They use a declarative syntax 
* They allow you to automate deployments.
* Have built-in validation. It checks the template before starting the deployment to make sure it succeeds 

#### File structure 

**schema** -> Defines the location of the JSON file that describes the structure of the JSON data.

**contentVersion** -> Defines the version of the template. Initially is usually set to 1.0.0.0, you can change it to document significant changes.

**apiProfile** -> Optional. Defines a collection of API versions for resource types.

**parameters** -> Optional. Section where you define values that are provided during deployment

**variables** -> Optional. Section where you define values that are used to simplify template language expressions 

**functions** -> Optional. Section where you can define user-defined functions that are available within the template

**resources** -> Section that defines the actual items you want to deploy or update.

**output** -> Optional section where you specify the values that are returned at the end of the deployment

### Deploy an ARM template

Sign in

```bash
az login 
```

Create a new resource group

```bash
az group create \ 
	--name {name of your resource group} 
	--location "{location}"
```

Define a default group

```bash
az configure --defaults group="<resource-group-name>"
```


Deploy the IaC file

```bash
templateFile="{provide-the-path-to-the-template-file}"

az deployment group create \
	--name blanktemplate \
	--resource-group myResourceGroup \
	--template-file $templateFile
```

Another way (if a default group is defined):

```bash
templateFile="azuredeploy.json"
today=$(date +"%d-%b-%Y")
DeploymentName="blanktemplate-"$today

az deployment group create \
	--name $DeploymentName \
	--template-file $templateFile
```

The date is optional 


A deployment group es un registro histórico del despliegue 

Ese registro guarda:

- Quién ejecutó el despliegue.
    
- A qué hora y en qué fecha se lanzó.
    
- Qué parámetros se usaron.
    
- Si el despliegue tuvo éxito o en qué recurso exacto dio error.


A CI/CD pipeline automates the automates the creation and deployment

### Regions

Spain Central -> spaincentral
West Europe -> westeurope
North Europe -> northeurope
France Central -> francecentral
Germany West Central -> germanywestcentral
UK South -> uksouth

Resource Groups commands 

List all groups
```bash
az group list --output table
``` 

Delete a Resource Group 
```bash
az group delete --name rg-az104-lab
``` 

Delete a Resource Group in second plane without confirmation 

```bash
az group delete --name rg-az104-lab --no-wait --yes
```



