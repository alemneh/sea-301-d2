(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {

    var githubToken = '64953712f08ba5ca1e994980096187bed64dc4c6';
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
        url: 'https://api.github.com/users/alemneh/repos' + '? per_page=5&sort=updated',
        type: 'GET',
        headers: { 'Authorization': 'token ' + githubToken },
        success: function(data, message, xhr) {
              console.log(data);
              repos.all = data;
        }
      });



  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
