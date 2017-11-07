<template lang="html">
  <div class="dashboard">
    <div class="row">
      <each-project :wifiInfo="wifiInfo"></each-project>
    <div class="col-xs-6 col-md-3">
      <a href="#" class="thumbnail" data-toggle="modal" data-target="#basicModal">
        +
      </a>
    </div>
  </div>
  <!-- Add Project -->
  <div class="modal fade" id="basicModal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Add Project</h4>
      </div>
      <div class="modal-body">
        <form>
            <div class="form-group">
              <input type="text" id="addProject" name="addProject" class="form-control" placeholder="Project name" v-model="newProject.projectName">
            </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button @click="addProject()" type="button" class="btn btn-primary" data-dismiss="modal">+ Add</button>
      </div>
    </div>
  </div>
</div>
  </div>

</template>

<script>
import eachProject from './eachProject'

export default {
  props: ['addProject', 'newProject', 'wifiInfo'],
  components: {
    eachProject
  }
}
</script>

<style lang="css">
.thumbnail {
  height: 100px;
}
.dashboard {
  margin-top: 8%
}
h4 {
  text-align: left;
}
</style>
