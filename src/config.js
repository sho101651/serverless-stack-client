const config = {
  STRIPE_KEY: "pk_test_51IKM77DOxcbE8HVqVf4YKLmcsljzsW9WVULgtYtJAsYE2k9u9Ha1IgH3RfhdERFM2Bt1Ee92vyEMwThMxZsJhQVW00Ek59z50A",
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-upload-sho101651",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6649izkc34.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_ABlzna4Dd",
    APP_CLIENT_ID: "3c6eclhacrjijch0eejvjir3ek",
    IDENTITY_POOL_ID: "us-east-1:3f7d85bc-a378-48f3-b6a9-f3e4995f3404",
  },
};

export default config;