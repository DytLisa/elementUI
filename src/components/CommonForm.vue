<template>
<!-- 表单：由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据 -->
  <el-form ref="form" label-width="100px" :model="form" :inline="inline">
    <el-form-item
      v-for="item in formLabel"
      :key="item.label"
      :label="item.label"
    >
    <!-- 输入框 -->
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="localForm[item.model]"
      > </el-input>
      <!-- 开关 -->
        <el-switch
          v-if="item.type === 'switch'"
          v-model="localForm[item.model]"
        ></el-switch>
        <!-- 日期时间选择器 -->
        <el-date-picker
          v-if="item.type === 'date'"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="选择日期"
          v-model="localForm[item.model]"
        > </el-date-picker>
        <!-- 下拉选择框 -->
          <el-select
          v-if="item.type === 'select'"
          placeholder="请选择"
          v-model="localForm[item.model]"
          >
          <!-- 下拉选值 -->
          <el-option
          v-for="item in item.opts"
          :key="item.val"
          :label="item.label"
          :value="item.value"
          ></el-option>
          </el-select>
    </el-form-item>
    <el-form-item><slot></slot></el-form-item>
  </el-form>
</template>
<script>
export default {
  name: "CommonForm",
  props: {
    formLabel: Array,
    form: Object,
    inline: Boolean,
  },
  data() {
    return{
      localForm:this.form
    }
  },
};
</script>
