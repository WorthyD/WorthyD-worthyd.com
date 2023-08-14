import { SkillSetGroup } from './types';
// import { Angular } from '@styled-icons/boxicons-logos/Angular';
import { ReactLogo } from '@styled-icons/boxicons-logos/ReactLogo';
import { Infinite } from '@styled-icons/boxicons-regular/Infinite';
// import AzureDevops from '@styled-icons/simple-icons/Azuredevops';
import { Nodejs } from '@styled-icons/boxicons-logos/Nodejs';
import { Docker } from '@styled-icons/boxicons-logos/Docker';
import { TestTube } from '@styled-icons/boxicons-regular/TestTube';
import { Code } from '@styled-icons/boxicons-regular/Code';
import {
  AngularLogo,
  JSLogo,
  GCPLogo,
  AzureLogo,
  CSSLogo,
  HTMLLogo,
  VueLogo
} from '../Icons';

const height = 35;
const width = 35;
export const mySkills: SkillSetGroup[] = [
  {
    name: 'Active',
    description:
      'Current tech actively being used professionally or in side projects.',
    skills: [
      {
        title: 'JS/TS',
        icon: <JSLogo height={height} width={width} />,
        skill: 90,
        desire: 100,
        time: '2007 - Present',
        subSkills: ['Performance Optimization', 'D3'],
        footNotes: ''
      },
      {
        title: 'HTML',
        icon: <HTMLLogo height={height} width={width} />,
        skill: 90,
        desire: 75,
        time: '2007 - Present',
        subSkills: ['HTML5', 'Accessibility', 'Figma - html'],
        footNotes: ''
      },
      {
        title: 'CSS',
        icon: <CSSLogo height={height} width={width} />,
        skill: 90,
        desire: 75,
        time: '2007 - Present',
        subSkills: ['CSS3', 'SCSS', 'LESS'],
        footNotes: ''
      },
      {
        title: 'Angular',
        icon: <AngularLogo height={height} width={width} />,
        time: '2017 - Present',
        skill: 80,
        desire: 100,
        subSkills: ['RXJS', 'Material', 'NGRX'],
        footNotes: ''
      },
      {
        title: 'React',
        icon: <ReactLogo size={width} color={'#61DBFB'} />,
        time: '2020 - Present',
        skill: 60,
        desire: 60,
        subSkills: ['MUI', 'React Query', 'Styled Components'],
        footNotes: ''
      },
      {
        title: 'Vue.js',
        icon: <VueLogo height={height} width={width} />,
        time: '2017, 2022 - Present',
        skill: 39,
        desire: 70,
        subSkills: ['Vue 2', 'Vue 3', 'Vuetify'],
        footNotes: ''
      },
      {
        title: 'CI/CD - DevOps',
        icon: <Infinite height={height} width={width} />,
        time: '2020 - Present',
        skill: 59,
        desire: 90,
        subSkills: ['GitHub Actions', 'Cloud Build', 'Azure Pipelines'],
        footNotes: ''
      },

      {
        title: 'Azure',
        icon: <AzureLogo height={height} width={width} />,
        time: '2022 - Present',
        skill: 59,
        desire: 50,
        subSkills: ['Azure Devops', 'Azure Pipelines'],
        footNotes: ''
      },
      {
        title: 'GCP',
        icon: <GCPLogo height={height} width={width} />,
        time: '2022 - Present',
        skill: 58,
        desire: 80,
        subSkills: ['Cloud Run', 'Cloud Build', 'Firebase'],
        footNotes: ''
      },
      {
        title: 'Code Testing',
        icon: <TestTube size={height} color={'#026e00'} />,
        time: '2020 - Present',
        skill: 50,
        desire: 80,
        subSkills: ['Jest', 'Cypress', 'Vitest'],
        footNotes: ''
      },
      {
        title: 'NodeJS',
        icon: <Nodejs size={height} color={'#026e00'} />,
        time: '2022 - Present',
        skill: 38,
        desire: 60,
        subSkills: ['Express', 'Generic Tasks'],
        footNotes: ''
      },
      {
        title: 'Docker',
        icon: <Docker size={height} color={'#0091e2'} />,
        time: '2020 - Present',
        skill: 30,
        desire: 80,
        subSkills: ['Compose'],
        footNotes: ''
      }
    ]
  },
  {
    name: 'Bench',
    description: 'Not actively using, but would consider revisiting',
    skills: [
      {
        title: 'C# / .Net',
        icon: <Code size={height} />,
        time: '2007 - 2022',
        skill: 60,
        desire: 60,
        subSkills: ['.Net MVC', 'Web Api', 'Entity Framework', 'Web Forms'],
        footNotes: ''
      },
      {
        title: 'Java',
        icon: <Code size={height} />,
        time: '2021 - 2022',
        skill: 38,
        desire: 30,
        subSkills: ['Spring'],
        footNotes: ''
      },
      {
        title: 'SQL',
        icon: <Code size={height} />,
        time: '2006 - 2022',
        skill: 58,
        desire: 50,
        subSkills: [],
        footNotes: ''
      }
      // SQL
    ]
  },
  {
    name: 'Archive',
    description: 'Tech no longer pursuing or obsolete',
    skills: [
      {
        title: 'AngularJS',
        icon: <Code size={height} />,
        time: '2012 - 2016',
        skill: 90,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'jQuery',
        icon: <Code size={height} />,
        time: '2008 - 2017',
        skill: 90,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'Grunt/Gulp',
        icon: <Code size={height} />,
        time: '2013 - 2017',
        skill: 70,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'SiteCore / Kentico / Umbraco',
        icon: <Code size={height} />,
        time: '2014 - 2017',
        skill: 60,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'Wordpress',
        icon: <Code size={height} />,
        time: '2010 - 2018',
        skill: 50,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'Windows Phone 7/8/RT',
        icon: <Code size={height} />,
        time: '2011, 2014 - 2017',
        skill: 60,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'Silverlight',
        icon: <Code size={height} />,
        time: '2014',
        skill: 30,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'Flash / Flex / ActionScript 3',
        icon: <Code size={height} />,
        time: '2009 - 2010',
        skill: 40,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'VB',
        icon: <Code size={height} />,
        time: '2001, 2003, 2007-2009',
        skill: 60,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },
      {
        title: 'Cobol',
        icon: <Code size={height} />,
        time: '2004',
        skill: 15,
        desire: 0,
        subSkills: [],
        footNotes: ''
      },

      {
        title: 'C++',
        icon: <Code size={height} />,
        time: '2002',
        skill: 15,
        desire: 0,
        subSkills: [],
        footNotes: ''
      }
    ]
    // AngularJS
    // jQuery
    // Task Runners - Grunt, Gulp
    // SiteCore / Kentico / Umbraco
    // Wordpress
    // Windows Phone 7/8/RT
    // Silverlight
    // Flash/Flex/ActionScript2&3
    // VB
    // C++
    // Cobol
  }
];
/*
JavaScript
Lodash
HTML
Git
Angular 2/4/5/6/7
CSS
TypeScript
SSL / HTTPS
React
REST
SASS
SQL Server
Node
GraphQL
MySQL
SQL (as a language)
Angular 1
Python
ESLint
Storybook
MongoDB
Excel / VBA
Redux
Amazon Web Services (AWS)
Postgres
Mocha
Jest
Express
Jasmine
GitHub Pages
Serverless Functions
Rx
Sinon
Amazon services
Jenkins
pandas
Amazon SQS
Accessibility (UX)
Google Cloud
Objective-C
Xcode
iOS Native
Derivatives and gradients
Docker
React Native
Java
C#
Apollo
PHP
Digital Ocean
Linear algebra
C++
Unity
Android Native
Swift
Gulp
Kubernetes
Redis
Feature identification
nginx
Probability distributions
.NET
Webpack
Swagger
Grunt
Travis
Subversion
Azure (Microsoft)
Elasticsearch
Rabbit MQ
Kafka
Heroku
Apache
Cordova
Vagrant
Rails
Ruby
Xamarin
IBM Watson / BlueMix
Convolution
opencv
Coffeescript
Amazon SNS
CosmosDB
GCP (Google)
CouchDB / Couchbase
Ansible
Karma
JSHint
Decision trees
Azure Service Bus
Cassandra
DB2
MSMQ
Vue
NuxtJS
Zeit / Next
Flow
Hapi
D3
Ember
Elixir
Jekyll
Three
R
numpy
Koa
Rancher
CircleCI
Data cleaning and splitting
Hypothesis testing
Bias and variance
Chef
Puppet
Descriptive statistics
Inferential statistics
Optimizers
Aurora
DynamoDB
Hadoop
Scala
Sharepoint
Terraform
Vault
Zookeeper
Cost functions
Gradient boosting
Image statistics
Linear regression
Regularization
tensorflow
Time series
Watson services
Haskell
Apache ActiveMQ
Celery
Clojure / Clojurescript
Cypress E2E
Docker Swarm
Elm
Filebeat
Golang
Graylog
Haxe
Ionic 1
Ionic 2
Iron MQ
MQ Series
Nagios
Nats
OCaml
Open Stack / OneOps
Open Trace
Phaser
Prometheus
Protractor
PureScript
Ramda
ReasonML
Rust
Sinatra
TestDouble
ANOVA
AWS Developer (Associate)
AWS Solutions Architect (Associate)
AWS Technical Professional (Digital)
Azure Solutions Architect Expert
Batch normalization
Bayes theorem
caffe
Cloud Formation
Convolutional networks
Fully connected networks
Jaeger
k-means
k-nearest neighbors
keras
Kotlin
Naive Bayes
nltk
PCA
Point operations
Recurrent networks
Residual analysis
sklearn
SOM
spacy
SVM / kernel tricks
Transfer learning
Validation of model fit
Warp / perspective
SOAP
AWS Business Professional (Digital)
Parcel
MariaDB
Logistic regression
Logstash
Middleman
pytorch
Certifications
Cloud Platforms
Command Line
Databases
DevOps
JS Frameworks / Tools
Languages
Miscellaneous
ML/AI: Deep Learning
ML/AI: Machine Learning
ML/AI: Machine Vision
ML/AI: Math and Statistics
ML/AI: Tools
Mobile
Queues / Messaging
Ruby Frameworks / Tools
Version Control
Web Paradigms

Oracle Data Integrator
Oracle RDBMS
GCP Dataflow
GCP BigQuery
GCP Cloud Spanner
MS SSIS
MS SSAS
Oracle Cloud
JD Edwards
PeopleSoft
SAP
Siebel
Oracle APEX
Oracle WebLogic
LDAP / Active Directory
Scrum / Agile
Terradata
MQTT
SQLite
Apache Spark
DataBricks
Blockchain
Tableau
Apache Hive
Apache Pig
Oracle GoldenGate
GCP Firebase
GCP Composer
dbt
cube.dev*/
