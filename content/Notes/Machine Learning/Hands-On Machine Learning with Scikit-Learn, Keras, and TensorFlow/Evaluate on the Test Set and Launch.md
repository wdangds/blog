---
title: Evaluate on the Test Set and Launch
draft:
tags:
  - model-evaluation
  - deploy
  - machine-learning
---
Once we have a final model we are confident in, it's time for the final evaluation on the test set we held back.
## 1. Evaluate Your System on the Test Set
The process is straightforward: take the test set, apply the transformations using our final pipeline, make predictions, and calculate the final RMSE.

```python
X_test = strat_test_set.drop("median_house_value", axis = 1)
y_test = strat_test_set["median_house_value"].copy()

final_predictions = final_model.predict(X_test)

final_rmse = mean_squared_error(y_test, final_predictions)**(1/2)
print(final_rmse # 42992.677451645395
```

The final performance on the test set is an RMSE of $42,992. It's also a good practice to compute a 95% confidence interval for this estimate to understand its precision.

> [!warning]
> Do not tweak our model after seeing the test set performance. Any improvements will likely not generalize to new data.

## 2. Launch, Monitor, and Maintain Your System
After getting approval, we need to prepare the model for production.
- **Deploying:** The simplest way is to save our trained model (including the full pipeline) using a library like `joblib` and then load it in our production environment. The model can be wrapped in a web service for easy integration with other applications. Cloud platforms like Google's Vertex AI also offer scalable deployment solutions.
- **Monitoring:** Deployment is not the end. We must continuously monitor the model's live performance to detect degradation or *model rot* (when the model becomes less accurate as data evolves). This may involve checking downstream metrics or setting up a human evaluation pipeline.
- **Maintaining:** We should automate the process of collecting new data, retraining the model, and evaluating it against the previous version before deploying it. It's also vital to monitor input data quality and maintain backups of models and datasets.

This entire process of building, deploying, and maintaining ML systems is part of a broader field called **ML Operations (MLOps)**.

[CODE DEMO](https://github.com/wdangds/blog/blob/v4/content/static/notebooks/ml-app-in-sci-chapter-2-handbook.ipynb)
