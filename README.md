Problem solved using Observable and Store patterns:

* State (data) is manange in one place (who owns the data problem is solved)
* We cannot longer emit new data from any place in the application - it's good
* Timing (ngOnInit, constructor, any place), we don't care about the sequnece of operations and still every component has fresh data