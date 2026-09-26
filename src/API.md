### DB fetching probs

First of all, there are no constraints such as `limit` or `offset`, which simply means if a user requests something, it can return all the rows from the DB. This is unnecessary load on the server, especially when the DB gets bigger.

Also, there is no `offset`, which means the user can't easily paginate through the results. For example, if he has 200 trades and wants to access trade number 52, the API should allow him to request a specific portion instead of fetching all 200 trades.

By adding `limit` and `offset`, he can simply say something like: **"I want 5 trades starting from trade number 6."**

### No security / validation checks

There are no checks to verify whether the query sent by the user is valid or not.

The code basically does:

* If a `user` query is provided → send it to the DB.
* If no `user` is provided → return all recent trades.

Here also, there is no `limit` or `offset`, so it can potentially return the complete result set.

The checks should roughly be:

* Check whether the user provided a `user` query or not.
* If no `user` is provided, fetch recent trades with a valid `limit` and `offset`. If they aren't specified, use default values.
* If a `user` query is provided, validate that it is a legitimate Ethereum address instead of blindly passing it to the DB.
* Also validate `limit` and `offset` so the user can't request unreasonable amounts of data.
