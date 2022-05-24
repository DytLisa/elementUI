<template>
  <div class="common-table">
    <el-table :data="tableData" height="90%" stripe>
      <!-- 数据列，采用v-for渲染 -->
      <el-table-column
        show-overflow-tooltip
        v-for="item in tableLabel"
        :key="item.prop"
        :label="item.label"
        width="item.width?item.width:125"
      >
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>
      <!-- 操作列 -->
      <el-table-column label="操作" min-width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页组件 -->
    <el-pagination
      class="pager"
      layout="prev,pager,next"
      :total="currentConfig.total"
      :current-page.sync="currentConfig.page"
      @current-change="changePage"
      :page-size="20"
    ></el-pagination>
  </div>
</template>
<script>
export default {
  name: "CommonTable",
  props: {
    tableData: Array,
    tableLabel: Array,
    config: Object,
  },
  data() {
    return {
      // 子组件v-model接收父组件props传递过来的值时，编辑器会报错
      // 如果需要v-model绑定props传给子组件的值，需要在data中定义一个变量接受props中的值
      currentConfig: this.config,
    };
  },
  methods: {
    handleEdit(row) {
      this.$emit("edit", row);
    },
    handleDelete(row) {
      this.$emit("del", row);
    },
    changePage(page) {
      this.$emit("changePage", page);
    },
  },
};
</script>
<style lang="less" scoped>
.common-table {
  height: calc(100% - 62px);
  background-color: #fff;
  position: relative;
  .pager {
    position: absolute;
    bottom: 0;
    right: 20px;
  }
}
</style>
